const puppeteer = require('puppeteer');
const keep_alive = require('./alive.js')


let commands = [
  "pls beg",
  "pls fish",
  "pls hunt",
  "pls pm",
  "pls search",
];
let searchoptions = [
  "air",
  "bus",
  "bushes",
  "uber",
  "car",
  "coat",
  "couch",
  "discord",
  "dog",
  "dresser",
  "laundromat",
  "mailbox",
  "pocket",
  "grass",
  "pantry",
  "shoe",
  "sink",
  "street",
  "tree",
  "dumpster",
  "discord",
  "pumpkin",
  "bed",
];
let times = [45, 60, 60, 60, 30, 20];
let timesleft = [0, 0, 0, 0, 0, 0, 0];



(async () => {
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  const page = await browser.newPage();

  await page.goto("https://www.discord.com/app");
  await page.type("input", "awesomeguy37806@gmail.com");
  await page.type('input[type="password"]', "harshil1pizza");
  await page.click('button[type="submit"]');
  await page.waitForNavigation({ waitUntil: "networkidle0" });
  await page.goto(
    "https://discord.com/channels/784482992181084230/784490280279474186"
  );
  await page.waitForSelector('div[aria-label="Message #bot-spamchannel"]');

  setInterval(async function () {
    for (var i = 0; i < commands.length; i++) {
      if (timesleft[i] <= 0) {
        await page.type('div[aria-label="Message #bot-spamchannel"]', commands[i]);

        await page.keyboard.press("Enter");
        if (commands[i] == "pls pm") {
          await wait(2000)
          const w = "frick";
          const num = parseInt(Math.random() * 5);
          await wait(1000);
          await page.type('div[aria-label="Message #bot-spamchannel"]', w.charAt(num));
          await page.keyboard.press("Enter");
        } else if (commands[i] == "pls search") {
          await wait(3000);
          const selector = await page.evaluate(() => {
            let a = Array.from(
              document.querySelectorAll(
                ".scrollerInner-2YIMLh > div > div > div"
              )
            );
            let b = a.map((x) => {
              return x.innerText;
            });
            return b;
          });
          const length = selector.length - 1;
          for (var j = 0; j < searchoptions.length; j++) {
            if (selector[length].indexOf(searchoptions[j]) != -1) {
              await page.type(
                'div[aria-label="Message #bot-spamchannel"]',
                searchoptions[j]
              );
              await page.keyboard.press("Enter");
              break;
            }
          }
        } else if (commands[i] == "pls hl") {
          /*const num = parseInt(Math.random()*2)+1;
            const text = num==1?""*/
          await wait(3000);
          const selector = await page.evaluate(() => {
            let a = Array.from(
              document.querySelectorAll(
                ".scrollerInner-2YIMLh > div > div > div"
              )
            );
            let b = a.map((x) => {
              return x.innerText;
            });
            return b;
          });
          const length = selector.length - 1;
          const ind = selector[length].indexOf("Your hint is ");
          const num = parseInt(selector[length].substring(ind + 13, ind + 15));
          if (num > 50) {
            await sleep(1000);
            await page.type('div[aria-label="Message #bot-spamchannel"]', "low");
          } else {
            await sleep(1000);
            await page.type('div[aria-label="Message #bot-spamchannel"]', "high");
          }
          await page.keyboard.press("Enter");
        } else if (commands[i] == "pls hunt") {
          await wait(4000);
          const selector2 = await page.evaluate(() => {
            let a = Array.from(
              document.querySelectorAll(
                ".scrollerInner-2YIMLh > div > div > div"
              )
            );
            let b = a.map((x) => {
              return x.innerText;
            });
            return b;
          });
          for (var z = 0; z < selector2.length; z++) {
            selector2[z] = selector2[z].split(
              "@Harshil Holy fricking ship god forbid you find something innocent like a duck, ITS A DRAGON! Type the phrase below in the next 10 seconds or you're toast!"
            )[1];
          }

          var b = selector2.filter((i) => {
            if (i) {
              return i;
            }
          });

          var last = selector2[selector2.length - 1];
          console.log(last);
          var key;
          if (last) {
            key = last.split("Type ")[1];
            await page.type('div[aria-label="Message #bot-spamchannel"]', key);
            await page.keyboard.press("Enter");
          }
        }
        timesleft[i] = times[i];
      } else {
        timesleft[i] -= 10;
      }
      await wait(1000);
    }
  }, 10000);




}) ();




function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
