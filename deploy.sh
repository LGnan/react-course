set -e
npm run build
cd dist
git init
git checkout -b main
git commit -m 'deploy'
git push -f git@github.com:LGnan/react-course.git main:WebIO
cd -