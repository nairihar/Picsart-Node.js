COMPONENT=$1

cd components/$COMPONENT


if [ -z $2 ]
then
  echo 'npm i'
fi

echo 'npm start'





// 9 players

updateGameData('game_key_12313')
updateGameData('game_key_12313')

node.js
  -> x*10 (want to update game data)
     -> get game_key_12313
     -> Node.js parse JSON
     -> process data
     -> Node.js stringify data
     -> set game_key_12313 data

1 get      2 get

process    set data

1 set


set game_key_12313 JSON

lock & unlock



game_key_12313_status === 1 -> lock

game_key_12313_status === 0 -> unlocked

1)  lock
    get game_key_12313
    Process in Npde.js
    set game_key_12313 data
    unlock

one of 9 waiting processes



function tryToLock(...) {
  return Promise(() => {
    // resdis setnx
    resolve()

    // ete chashxatec
    setTimeout(() => {
      resolve(tryToLock(...))
    }, 100);
  })
}


// resdis unlock




