function tryLogin() {
  var id = document.getElementById('id');
  var pw = document.getElementById('pw');
  const idText = id.value;
  const pwText = pw.value;

  console.log(idText);
  console.log(pwText);

  if (idText == '' || pwText == '') {
    return false;
  }

  var loginResult = checkLogin(idText, pwText);
  if (loginResult) {
    // window.location.href = './index.html';
    window.location.replace('index.html');
  }
}

function enterLogin(e) {
  if (e.keyCode == 13) {
    tryLogin();
  }
}

function checkLogin(id, pw) {
  var checkInfo = false;

  if (id == pw) {
    checkInfo = true;
  }
  return checkInfo;
}