const mongoose = require('mongoose');
const {MONGO_URI} = require('./config');
const axios = require('axios').default;
const cheerio = require('cheerio');
const cron = require('node-cron');
const {BreakingNew} = require('./models');

//Conexión a la base de datos
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true}).catch(err => console.log(err));

cron.schedule("* */4 * * * * ", async() => {
    console.log('Cron Job Executed!');
    const html = await axios.get("https://cnnespanol.cnn.com/"); //Devuelve una promesa
    const $ = cheerio.load(html.data);
    const titles = $(".news__title");
    console.log(titles);
    titles.each((index, element) => {
        const breakingNew = {
            title: $(element)
                .text()
                .toString(),
            link: $(element)
                .children()
                .attr("href")
        };
        BreakingNew.create([breakingNew]);
    });
})










