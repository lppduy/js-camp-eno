const ajaxLoader = function (url) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
  });
};

ajaxLoader('myJson.json');
