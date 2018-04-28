language: node_js
node_js:
  - stable
cache:
  directories:
    - node_modules
script:
  - npm test -- --coverage
after_script:
  - npm run coveralls
