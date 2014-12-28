var awdy = {

  loadJson: function(href, callback, bugparam) {
    if (!callback)
      return;
    var xhr = new XMLHttpRequest();
    xhr.onerror = function() {
      console.error('Failed to fetch file: ' + href, xhr.statusText);
    };
    xhr.onload = function() {
      if (bugparam) {
        callback(JSON.parse(xhr.response.body.getElementsByTagName('pre')[0].innerHTML));
      } else {
        callback(xhr.response);
      }
    };
    xhr.open('GET', href); // async
    xhr.responseType = 'document';
    xhr.send();
  },
  fetchProjectsInfo: function(){
    this.loadJson("res/projects.json", function(obj){
      console.log(JSON.parse(obj));
    }, false);
  }


};

window.addEventListener("load", function _init(evt){
  window.removeEventListener("load",_init);
  console.log("okay");
  awdy.fetchProjectsInfo();
});
