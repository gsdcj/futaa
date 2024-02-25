var url = localStorage.getItem('url')
var time = localStorage.getItem('time')
fetch(url)
    .then(res => res.json())
    .then(data => show(data));
    
var holder = document.querySelector('.holder')
var pred = document.querySelector('.pred')
var stand = document.querySelector('.stand')

l_id = localStorage.getItem('league')
standings = `https://apiv3.apifootball.com/?action=get_standings&league_id=${l_id}&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3`

fetch(standings)
    .then(res => res.json())
    .then(d => std(d))
    
function std(data){
    stand.addEventListener('click', () => {
        var bd = document.querySelector('.data')
        bd.innerHTML = ''
        var table = document.createElement('table')
        table.classList.add('.table')
        var thead = document.createElement('thead')
        var pos = document.createElement('th')
        pos.innerText = '#'
        var team = document.createElement('th')
        team.innerText = 'Teams'
        var mp = document.createElement('th')
        mp.innerText = 'MP'
        var w = document.createElement('th')
        mp.innerText = 'W'
        var d = document.createElement('th')
        mp.innerText = 'D'
        var l = document.createElement('th')
        mp.innerText = 'L'
        var pts = document.createElement('th')
        mp.innerText = 'PTS'

        var tbody = document.createElement('tbody')
    })
}


var id = localStorage.getItem('id')
console.log(id);

predicts = `https://apiv3.apifootball.com/?action=get_predictions&from=${time}&to=${time}&match_id=${id}&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3`
fetch(predicts)
    .then(res => res.json())
    .then(data => predictor(data))

function predictor (data) {
    var bd = document.querySelector('.data')
    var hh = document.querySelector('.h2h')
    pred.addEventListener('click', () => {
        bd.innerHTML = ''
        console.log(data);
        pred.classList.add('.active')
        hh.classList.remove('.active')
        var card = document.createElement('div')
        card.classList.add('.card')
        var card_holder = document.createElement('div')
        card_holder.classList.add('.card-body')
        var hdw = document.createElement('div')
        var h = document.createElement('div')
        h.classList.add('.d-flex')
        h.classList.add('.flex-row')
        var home = document.createElement('p')
        home.innerText = data[0].match_hometeam_name + ' : '
        var p_home = document.createElement('p')
        p_home.innerText = data[0].prob_HW
        var away = document.createElement('p')
        away.innerText = data[0].match_awayteam_name + ' : '
        var p_away = document.createElement('p')
        p_away.innerText = data[0].prob_AW
        var a = document.createElement('div')
        var draw = document.createElement('p')
        draw.innerText = 'Draw : '
        var p_draw = document.createElement('p')
        p_draw.innerText = data[0].prob_D
        var d = document.createElement('div')
        var h_d = document.createElement('p')
        h_d.innerText = 'Home / Draw: '
        var p_hd = document.createElement('p')
        p_hd.innerText = data[0].prob_HW_D
        var hd = document.createElement('div')
        var a_d = document.createElement('p')
        a_d.innerText = 'Away / Draw : '
        var p_ad = document.createElement('p')
        p_ad.innerText = data[0].prob_AW_D
        var ad = document.createElement('div')
        var h_a = document.createElement('p')
        h_a.innerText = 'Home / Away : '
        var p_ha = document.createElement('p')
        p_ha.innerText = data[0].prob_HW_AW
        var ha = document.createElement('div')
        var over = document.createElement('p')
        over.innerText = 'Over 1.5 : '
        var p_over = document.createElement('p')
        p_over.innerText = data[0].prob_O_1
        var o = document.createElement('div')
        o.appendChild(over)
        o.appendChild(p_over)
        ha.appendChild(h_a)
        ha.appendChild(p_ha)
        ad.appendChild(a_d)
        ad.appendChild(p_ad)
        hd.appendChild(h_d)
        hd.appendChild(p_hd)
        d.appendChild(draw)
        d.appendChild(p_draw)
        console.log(data);

        a.classList.add('.d-flex')
        h.appendChild(home)
        h.appendChild(p_home)
        a.appendChild(away)
        a.appendChild(p_away)
        hdw.appendChild(h)
        hdw.appendChild(a)
        hdw.appendChild(d)
        hdw.appendChild(hd)
        hdw.appendChild(ad)
        hdw.appendChild(ha)
        hdw.appendChild(o)
        card_holder.appendChild(hdw)
        card.appendChild(card_holder)
        bd.appendChild(card)
    })

}
var hh = document.querySelector('.h2h')
hh.addEventListener('click', () => {
    var d = document.querySelector('.data')
    d.innerHTML = ''
    fetch(h2h)
        .then(res => res.json())
        .then(dt => smth(dt))
})
function smth (data) {
    var statistics = document.querySelector('.data')
    //console.log(data)
    for (var x in data){
        
        for (var i in data[x]){
            //console.log(data[x][i].match_date);
            var card = document.createElement('div')
            card.classList.add('card')
            var ttle = document.createElement('div')
            ttle.classList.add('card-title')
            ttle.innerText = data[x][i].match_date
            card.appendChild(ttle)
            var bdy = document.createElement('div')
            bdy.classList.add('card-body')
            var h_img = document.createElement('img')
            h_img.src = data[x][i].team_home_badge
            var home = document.createElement('p')
            home.innerText = data[x][i].match_hometeam_name
            bdy.appendChild(h_img)
            bdy.appendChild(home)
            var score = document.createElement('div')
            var h_score = document.createElement('p')
            h_score.innerText = data[x][i].match_hometeam_score
            var a_score = document.createElement('p')
            a_score.innerText = data[x][i].match_awayteam_score
            var vs = document.createElement('p')
            vs.innerText = ':'
            score.classList.add('d-flex')
            score.classList.add('mx-auto')
            score.appendChild(h_score)
            score.appendChild(vs)
            score.appendChild(a_score)
            var away = document.createElement('p')
            away.innerText = data[x][i].match_awayteam_name
            var a_img = document.createElement('img')
            a_img.src = data[x][i].team_away_badge
            bdy.classList.add('d-flex')
            bdy.classList.add('justify-content-between')
            bdy.appendChild(score)
            bdy.appendChild(away)
            bdy.appendChild(a_img)
            card.classList.add('d-flex')
            bdy.classList.add('align-center')
            a_img.classList.add('img')
            h_img.classList.add('img')
            card.appendChild(bdy)
            
            statistics.appendChild(card)
            

        }
    }
}

function show (data) {
    for (var i in data){
       // console.log(data[i]);
        var card = document.createElement('div')
        card.classList.add('card')
        var h_team = document.createElement('div')
        var h_img = document.createElement('img')
        h_img.src = data[i].team_home_badge
        var h_name = document.createElement('p')
        h_name.innerText = data[i].match_hometeam_name
        var h_name_data = data[i].match_hometeam_id
        var a_team = document.createElement('div')
        var a_img = document.createElement('img')
        a_img.src = data[i].team_away_badge
        var a_name = document.createElement('p')
        a_name.innerText = data[i].match_awayteam_name
        var a_name_data = data[i].match_awayteam_id
        var vs = document.createElement('p')
        vs.innerText = 'VS'
        h_team.appendChild(h_img)
        h_team.appendChild(h_name)
        a_team.appendChild(a_img)
        a_team.appendChild(a_name)
        card.classList.add('d-flex')
        card.classList.add('justify-content-between')
        card.classList.add('flex-row')
        card.classList.add('align-center')
        card.appendChild(h_team)
        card.appendChild(vs)
        card.appendChild(a_team)
        holder.appendChild(card)
    }
    
    h2h = `https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=${h_name_data}&secondTeamId=${a_name_data}&APIkey=f8521416c6cbf50a4f0f3fe4c7dde8867d66da02a66dd4d3db5f19554a1fdad3`
    fetch(h2h)
        .then(res => res.json())
        .then(stats => smth(stats))
}
//home = localStorage.getItem('h_name')
//away = localStorage.getItem('a_name')
//console.log(h_name_data);
//h//fetch(h2h)
//    .then(res => res.json())
//    .then(data => console.log(data))
