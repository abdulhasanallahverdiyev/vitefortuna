echo "Switching to branch master"
git checkout master

echo "Building app.."

npm run build

echo "Deploying files to server..."

scp -r dist/* root@209.38.244.216:/var/www/209.38.244.216/
echo "Done!"