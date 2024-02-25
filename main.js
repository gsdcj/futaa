var date = new Date()
var dd = date.getDate()
var mm = date.getMonth()+1
var yy = date.getFullYear()

var format = `${yy}-${mm}-${dd}`
compe = 'https://apiv3.apifootball.com/?action=get_leagues&country_id=6&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3'
all_leagues = 'https://apiv3.apifootball.com/?action=get_leagues&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3'
teams = 'https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3'
player = 'https://apiv3.apifootball.com/?action=get_players&player_name=Benzema&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3'
standings = 'https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=xxxxxxxxxxxxxx'
fixtures = `https://apiv3.apifootball.com/?action=get_events&from=${format}&to=${format}&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3`
lineups = 'https://apiv3.apifootball.com/?action=get_lineups&match_id=86392&APIkey=xxxxxxxxxxxxxx'
odds = 'https://apiv3.apifootball.com/?action=get_odds&from=2023-05-16&to=2023-05-16&APIkey=xxxxxxxxxxxxxx'
h2h = 'https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=7275&secondTeamId=151&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3'
predicts = `https://apiv3.apifootball.com/?action=get_predictions&from=${format}&to=${format}&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3`
topscores = 'https://apiv3.apifootball.com/?action=get_topscorers&league_id=302=xxxxxxxxxxxxxx'
vidz = 'https://apiv3.apifootball.com/?action=get_videos&match_id=206376&APIkey=xxxxxxxxxxxxxx'
fetch(fixtures)
    .then(res => res.json())
    .then(data => show(data))
    
const div = document.querySelector('.matches')
    

//console.log(div);
function show (data) {
    data.sort(function (a, b){
        if (a.country_name < b.country_name){
            return -1;
        }
        if (a.country_name > b.country_name){
            return 1;
        }
        return 0
    })
    //console.log(data);
    for (var i in data) {
        /*sorted = data.sort()
        console.log(sorted);*/
        if (data[i].match_status != 'finished'){
        
        //console.log(data[i]);
        const card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('mt-2')
        card.setAttribute('id', data[i].match_id)
        var ttle = document.createElement('div')
        ttle.classList.add('card-title')
        ttle.classList.add('mx-auto')
        ttle.innerText = data[i].country_name
        card.appendChild(ttle)
        const c_body = document.createElement('div')
        c_body.classList.add('card-body')
       // const h_container = document.createElement('div')
        const h_team = document.createElement('div')
        const h_img = document.createElement('img')
        const h_name = document.createElement('p')
        const t_container = document.createElement('div')
        t_container.classList.add('container')
        const a_team = document.createElement('div')
        const a_img = document.createElement('img')
        const a_name = document.createElement('p')
        const m_status = document.createElement('div')
        const m_time = document.createElement('p')
        const m_date = document.createElement('p')
        const pred = document.createElement('div')
        const m_pred = document.createElement('p')
        h_img.src = data[i].team_home_badge
        a_img.src = data[i].team_away_badge
        h_name.innerText = data[i].match_hometeam_name
        a_name.innerText = data[i].match_awayteam_name
        h_team.classList.add('d-flex')
        a_team.classList.add('d-flex')
        m_time.innerText = data[i].match_time
        m_date.innerText = data[i].match_date
        m_status.classList.add('me-2')
        m_status.classList.add('text-nowrap')
        m_status.appendChild(m_time)
        m_status.appendChild(m_date)
        a_team.appendChild(a_img)
        a_team.appendChild(a_name)
        h_team.appendChild(h_img)
        h_team.appendChild(h_name)
        t_container.classList.add('flex-column')
        t_container.appendChild(h_team)
        t_container.appendChild(a_team)
        c_body.classList.add('d-flex')
        c_body.classList.add('justify-content-between')
        c_body.appendChild(t_container)
      //  c_body.appendChild(h_container)
        c_body.appendChild(m_status)
        card.appendChild(c_body)
        div.appendChild(card)
        //console.log(data[i]);
        card.addEventListener('click', () => {
            var id = card.getAttribute('id')
            console.log(id);
            url = `https://apiv3.apifootball.com/?action=get_events&from=${format}&to=${format}&match_id=${id}&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3`
            localStorage.setItem('url', url)
            localStorage.setItem('time', format)
            console.log(card.h_name)
            console.log(data[i].league_id);
            localStorage.setItem('h_team',  data[i].match_hometeam_name)
            localStorage.setItem('a_team',  data[i].match_awayteam_name)
            localStorage.setItem('id', id)
            localStorage.setItem('leageu', data[i].league_id)
            location.href = 'match.html'
          //  fetch(`https://apiv3.apifootball.com/?action=get_events&from=2024-02-21&to=2024-02-21&match_id=${id}&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3`
         //   )
              //  .then(res => res.json())
             //   .then(data => console.log(data))
        
        })
        
        }
        
    };
};