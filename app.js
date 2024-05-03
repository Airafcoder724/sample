console.log("hello")
airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder
$ mkdir 2c

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder
$ cd 2c

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c
$ git init
Initialized empty Git repository in G:/rodesidecoder/2c/.git/

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$ git add .

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$ touch app.js

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        app.js

nothing added to commit but untracked files present (use "git add" to track)

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$ git add .

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   app.js


airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$ git remote add origin "git@github.com:Airafcoder724/sample.git"

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$ git commit -m "first"
[master (root-commit) 90f6c3d] first
 1 file changed, 1 insertion(+)
 create mode 100644 app.js

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$ git status
On branch master
nothing to commit, working tree clean

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$ git push -u origin master
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 225 bytes | 75.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To github.com:Airafcoder724/sample.git
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.

airaf@DESKTOP-TICCI92 MINGW64 /g/rodesidecoder/2c (master)
$