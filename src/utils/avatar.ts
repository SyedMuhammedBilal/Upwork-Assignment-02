function createAvatar(username: string) {
    const url = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`
    return url
}

export {
    createAvatar
}