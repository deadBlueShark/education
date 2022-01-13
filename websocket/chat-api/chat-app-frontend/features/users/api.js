export const addNewUser = async (user: UserType): Promise<any> => {
  const res = await fetch("http://localhost:6000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  });

  return await res.json();
}

export const sendUserMessage = async (data: sendUserMessageDataType): Promise<any> => {
  const res = await fetch(`http://localhost:6000/users/${data.user.id}/add_message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: data.user.id,
      message: data.message.content,
    }),
  });

  return await res.json();
};
