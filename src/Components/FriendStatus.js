function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);
  if (isOnline === null) {
    return "Chargement...";
  }
  return isOnline ? "En ligne" : "Hors-ligne";
}
