import {httpService} from './http.service';

export const getChatContacts = () => {
  return httpService.get('chat/get-chatcontacts');

}

export const getChatContents = ({email}) =>
{
  return httpService.post('chat/get-chatcontents', {email})
}