
if hash scoop 2>/dev/null; then
        echo 'scoop not exist'
    else 
        # install brew as manager packages windows
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

        # install supabase as local database 
        brew install supabase/tap/supabase

        # upgrade supabase
        brew upgrade supabase

        # install node dependecies 
        npm i
fi

# settings git hooks
npx husky install

# install extensions for vscode
code --install-extension "formulahendry.auto-close-tag"
code --install-extension "coenraads.bracket-pair-colorizer-2"
code --install-extension "dbaeumer.vscode-eslint"
code --install-extension "eamodio.gitlens"
code --install-extension "esbenp.prettier-vscode"
code --install-extension "syler.sass-indented"
code --install-extension "gruntfuggly.todo-tree"
code --install-extension "pmneo.tsimporter"

# run browser
start http://localhost:3000

# run Next.js project
npm run dev