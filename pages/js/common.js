$(function(){
  $(window).scroll(function (event) { 
    if(window.scrollY >= 0 && window.scrollY < 50){
      $('.nav').css("background-color", 'rgba(0,0,0,.3)');
    }
    if (window.scrollY >= 51 && window.scrollY < 100) {
      $('.nav').css("background-color", 'rgba(0,0,0,0.3)');
    }
    if (window.scrollY >= 101 && window.scrollY < 150) {
      $('.nav').css("background-color", 'rgba(0,0,0,0.3)');
    }
    if (window.scrollY >= 151 && window.scrollY < 200) {
      $('.nav').css("background-color", 'rgba(0,0,0,0.4)');
    }
    if (window.scrollY >= 201 && window.scrollY < 250) {
      $('.nav').css("background-color", 'rgba(0,0,0,0.5)');
    }
    if (window.scrollY >= 251 && window.scrollY < 300) {
      $('.nav').css("background-color", 'rgba(0,0,0,0.6)');
    }
    if (window.scrollY >= 301) {
      $('.nav').css("background-color", 'rgba(0,0,0,0.7)');
    }
  })
})

function getBannerList () {
  return axios.post(MongoConfig.ftrace.base + '/api/mongo/' + MongoConfig.ftrace.database + '/ftrace.front_banner/find', {sort: {order: 1}}).then(item => {
    return item.data.items
  })
}

function getContactList () {
  return axios.post(MongoConfig.ftrace.base + '/api/mongo/' + MongoConfig.ftrace.database + '/ftrace.front_contact/find', {sort: {order: 1}}).then(item => {
    return item.data.items
  })
}
function getAbout () {
  return axios.post(MongoConfig.ftrace.base + '/api/mongo/' + MongoConfig.ftrace.database + '/ftrace.front_about/first').then(item => {
    return item.data.info
  })
}
function insertPv (pageName) {
  return axios.post(MongoConfig.ftrace.base + '/api/mongo/ftrace/ftrace.pv', {
    createdOn: {
      $numberLong: String(Date.now())
    },
    toAccessPage: pageName
  }).then(item => {
    return item
  })
}
