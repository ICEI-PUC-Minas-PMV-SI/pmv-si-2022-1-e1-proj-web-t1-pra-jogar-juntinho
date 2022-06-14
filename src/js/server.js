const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

const articlesData = [];

server.get('/', async (request, response) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto('https://www.gamespot.com/api/articles?api_key=26fe1805330b5dafd2b07677de397e70eff7426b&format=json&limit=5&sort=publish_date:desc');

  let pageContent = await page.evaluate(() => {
    let articlesAPI = [];
    let articles = [];

    articlesAPI = JSON.parse(document.querySelector('pre').textContent).results;

    for (let index = 0; index < articlesAPI.length; index++) {
      articles.push({
        id: articlesAPI[index].id,
        title: articlesAPI[index].title,
        description: articlesAPI[index].body.split('</p>')[0].substring(3,articlesAPI[index].body.split('</p>')[0].length).replace('dir=\"ltr\">', ''),
        authors: articlesAPI[index].authors,
        publish_date: articlesAPI[index].pulish_date,
        img_lg: articlesAPI[index].image.original
      })
    }
    articlesData = articles;

    fetch("http://localhost:3004/artigos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articlesData),
    }).then(res => articles.push(res))

    return articles;
  });

  await browser.close();

  response.send({
    pageContent
  })
})

const port = 3000;
server.listen(port, () => {
  console.log(`
    Servidor subiu com sucesso!
    acesse em http://localhost:${port}
  `)
})