var isStatus = document.querySelector('h4');
var btn = document.querySelector('.add');

// var removefriend = document.querySelector('.remove');

var check = 0;

btn.addEventListener('click', function () {
  if (check == 0) {
    isStatus.innerHTML = 'Friends';
    isStatus.style.color = 'green';
    btn.innerHTML = 'Remove Friend';

    check = 1;
  } else {
    isStatus.innerHTML = 'Stanger';
    isStatus.style.color = 'red';
    check = 0;
    btn.innerHTML = 'Add Friend';
  }
});

// removefriend.addEventListener('click', function () {
//   isStatus.innerHTML = 'Stanger';
//     isStatus.style.color = 'red';
// });
