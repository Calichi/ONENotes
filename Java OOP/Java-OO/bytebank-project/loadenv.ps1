function run ($class) {
  java -cp ./bin $class;
}

function commit ($message) {
  git add .;
  git commit -m $message;
}