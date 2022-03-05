Function Test-CommandExists {

    Param ($command)

    $oldPreference = $ErrorActionPreference

    $ErrorActionPreference = 'stop'

    try { if (Get-Command $command) { RETURN $true } }

    Catch { Write-Host "$command does not exist"; RETURN $false }

    Finally { $ErrorActionPreference = $oldPreference }

}

if (!(Test-CommandExists scoop )) {

    # install scoop as manager package of windows
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    iwr -useb get.scoop.sh | iex
   
    
    # install supabase as local database
    scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
    scoop install supabase
    scoop update supabase
}


# install node dependecies 
npm i

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