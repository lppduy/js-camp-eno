const countdown1 = n => {
  if (n < 0) {
    console.log('Invalid input.');
  }

  for (let i = n; i >= 0; i--) {
    setTimeout(() => {
      console.log(i);
    }, (n - i) * 1000);
  }
};

const countdown2 = n => {
  const count = setInterval(() => {
    if (n === 0) clearInterval(count);
    console.log(n);
    n--;
  }, 1000);
};

// closure -> ứng dụng để đóng gói module lại
