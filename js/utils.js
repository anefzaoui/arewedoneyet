var awdy = {
  loadBugs: function(href, callback) {
    if (!callback)
      return;
    var xhr = new XMLHttpRequest();
    xhr.onerror = function() {
      console.error('Failed to fetch file: ' + href, xhr.statusText);
    };
    xhr.onload = function() {
      callback(JSON.parse(xhr.response.body.getElementsByTagName('pre')[0].innerHTML));
    };
    xhr.open('GET', href, true); // async
    xhr.responseType = 'document';
    xhr.send();
  },

  loadProjects: function(href, callback) {
    if (!callback)
      return;
    var xhr = new XMLHttpRequest();
    xhr.onerror = function() {
      console.error('Failed to fetch file: ' + href, xhr.statusText);
    };
    xhr.onload = function() {
      callback(xhr.response);
    };

    xhr.open('GET', href); // async
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = 'json';
    xhr.send();
  },

  addListeners: function(){

  },

  fetchProjectsInfo: function() {
    var self = this;
    function _fetch(obj) {
      for(i=0; i<obj.length; i++) {
        document.getElementById("projects").innerHTML += "<option id='"+obj[i].id+"'>"+obj[i].name+"</option>";
      }
      self.addListeners();
    }
    this.loadProjects("res/projects.json", _fetch);
  }

};

window.addEventListener("load", function _init(evt) {
  window.removeEventListener("load", _init);
  awdy.fetchProjectsInfo();
});
