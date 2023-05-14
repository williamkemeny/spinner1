const icon = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
];

const loadingIcon = (input, time) => {
  if (input.length === 0) {
    //Do nothing
  } else {
    process.stdout.write(input[0]);
    input.shift();
    setTimeout(loadingIcon, time, input, time);
  }
};

setTimeout(loadingIcon, 100, icon, 200);
