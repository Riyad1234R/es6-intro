document.getElementById('add-border').addEventListener('click', function () {
    console.log('click')
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow'
})

function addBackroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backroundColor = 'lightblue';
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    console.log('click')
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = ` <h3 class="friend-name">New friend-4</h3>
    <p>Quas, maiores.</p>`;
    container.appendChild(friendDiv);
})
