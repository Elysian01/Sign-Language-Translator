// const gifs_files = ['0-address.gif', '1-ahemdabad.gif', '2-all.gif', '3-any-questions.gif', '4-are-you-angry.gif', '5-are-you-hungry.gif', '6-assam.gif', '7-august.gif', '8-banana.gif', '9-banaras.gif', '10-banglore.gif', '11-be-careful.gif', '12-bridge.gif', '13-cat.gif', '14-christmas.gif', '15-church.gif', '16-cilinic.gif', '17-dasara.gif', '18-december.gif', '19-did-you-finish-homework.gif', '20-do-you-have-money.gif', '21-do-you-want-something-to-drink.gif', '22-do-you-watch-TV.gif', '23-dont-worry.gif', '24-flower-is-beautiful.gif', '25-good-afternoon.gif', '26-good-morning.gif', '27-good-question.gif', '28-grapes.gif', '29-hello.gif', '30-hindu.gif', '31-hyderabad.gif', '32-i-am-a-clerk.gif', '33-i-am-fine.gif', '34-i-am-sorry.gif', '35-i-am-thinking.gif', '36-i-am-tired.gif', '37-i-go-to-a-theatre.gif', '38-i-had-to-say-something-but-I-forgot.gif', '39-i-like-pink-colour.gif', '40-i-love-to-shop.gif', '41-job.gif', '42-july.gif', '43-june.gif', '44-karnataka.gif', '45-kerala.gif', '46-krishna.gif', '47-lets-go-for-lunch.gif', '48-mango.gif', '49-may.gif', '50-mile.gif', '51-mumbai.gif', '52-nagpur.gif', '53-nice-to-meet-you.gif', '54-open-the-door.gif', '55-pakistan.gif', '56-please-call-me-later.gif', '57-police-station.gif', '58-post-office.gif', '59-pune.gif', '60-punjab.gif', '61-saturday.gif', '62-shall-I-help-you.gif', '63-shall-we-go-together-tommorow.gif', '64-shop.gif', '65-sign-language-interpreter.gif', '66-sit-down.gif', '67-stand-up.gif', '68-take-care.gif', '69-temple.gif', '70-there-was-traffic-jam.gif', '71-thursday.gif', '72-toilet.gif', '73-tomato.gif', '74-tuesday.gif', '75-usa.gif', '76-village.gif', '77-wednesday.gif', '78-what-is-the-problem.gif', "79-what-is-today's-date.gif", '80-what-is-your-father-do.gif', '81-what-is-your-name.gif', '82-whats-up.gif', '83-where-is-the-bathroom.gif', '84-where-is-the-police-station.gif', '85-you-are-wrong.gif']
// const letters = ['a.gif', 'b.gif', 'c.gif', 'd.gif', 'e.gif', 'f.gif', 'g.gif', 'h.gif', 'i.gif', 'j.gif', 'k.gif', 'l.gif', 'm.gif', 'n.gif', 'o.gif', 'p.gif', 'q.gif', 'r.gif', 's.gif', 't.gif', 'u.gif', 'v.gif', 'w.gif', 'x.gif', 'y.gif', 'z.gif']
// const keywords = ['address', 'ahemdabad', 'all', 'any questions', 'are you angry', 'are you hungry', 'assam', 'august', 'banana', 'banaras', 'banglore', 'be careful', 'bridge', 'cat', 'christmas', 'church', 'cilinic', 'dasara', 'december', 'did you finish homework', 'do you have money', 'do you want something to drink', 'do you watch TV', 'dont worry', 'flower is beautiful', 'good afternoon', 'good morning', 'good question', 'grapes', 'hello', 'hindu', 'hyderabad', 'i am a clerk', 'i am fine', 'i am sorry', 'i am thinking', 'i am tired', 'i go to a theatre', 'i had to say something but I forgot', 'i like pink colour', 'i love to shop', 'job', 'july', 'june', 'karnataka', 'kerala', 'krishna', 'lets go for lunch', 'mango', 'may', 'mile', 'mumbai', 'nagpur', 'nice to meet you', 'open the door', 'pakistan', 'please call me later', 'police station', 'post office', 'pune', 'punjab', 'saturday', 'shall I help you', 'shall we go together tommorow', 'shop', 'sign language interpreter', 'sit down', 'stand up', 'take care', 'temple', 'there was traffic jam', 'thursday', 'toilet', 'tomato', 'tuesday', 'usa', 'village', 'wednesday', 'what is the problem', "what is today's date", 'what is your father do', 'what is your name', 'whats up', 'where is the bathroom', 'where is the police station', 'you are wrong']

// const imageLoader = document.getElementById("image-loader")

// const start = async () => {

//      buttons_ids = [47, 79, 20, 53, 81, 83, 56, 62, 29, 33, 34, 54, 5, 11, 3, 68];
//      for (id of buttons_ids) {
//           document.getElementById(id.toString()).addEventListener('click', (e) => load_image(e.target.value));
//      };

//      document.getElementById('add-button').addEventListener('click', (e) => search());
//      const search = () => {
//           let found = false
//           const searchInput = document.getElementById("inputClassName").value.toLowerCase();
//           console.log(searchInput);

//           for (let i = 0; i < keywords.length; i++) {
//                if (keywords[i] === searchInput) {
//                     var path = "../static/ISL_Gifs/" + gifs_files[i];
//                     imageLoader.innerHTML = '<img src=' + path + ' class="tutorial-image">'
//                     found = true;
//                     break
//                }
//           }

//           if (found !== true) {
//                alert("Not Found")
//           }
//      }

//      const load_image = async (val) => {
//           var path = "../static/ISL_Gifs/" + gifs_files[val];
//           imageLoader.innerHTML = '<img src=' + path + ' class="tutorial-image">'
//      };
// }

// window.onload = () => {
//      start();
// };