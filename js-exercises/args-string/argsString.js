const argsString = (message = '', args = []) => {
  let updatedMessage = message;
  if (updatedMessage.includes('{}')) {
    for (let i = 0; i < args.length; i++) {
      updatedMessage = updatedMessage.replace('{}', args[i]);
    }
  }
  return updatedMessage;
};

export {
  argsString
};