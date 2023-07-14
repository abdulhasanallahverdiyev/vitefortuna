echo "Switching to branch master"
git checkout master

echo "Building app.."

npm run build

echo "Deploying files to server..."

scp -r dist/* root@164.92.238.174:/var/www/164.92.238.174/
echo "Done!"