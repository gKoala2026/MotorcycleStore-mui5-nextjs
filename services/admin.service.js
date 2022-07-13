import {httpService} from './http.service';


export const getValuation = ({startDate, endDate}) => {
  return httpService.post('admin/get-valuation', {startDate, endDate});

}

export const getLead = ({startDate, endDate}) => {
  return httpService.post('admin/get-lead', {startDate, endDate});
}

export const inputProperty = ({ inputData }) => {
  return httpService.post('admin/input-property', { inputData });
}

export const deleteAllProperty = () => {
  return httpService.get('admin/delete-all-property');
}

export const getAllProperty = () => {
  return httpService.get('admin/get-all-property');
}

export const getAllLeads = () => {
  return httpService.get('admin/get-all-lead');
}

export const getAllValuations = () => {
  return httpService.get('admin/get-all-valuation');
}

export const selectedLeadValuationDelete = ({ids}) => {
  return httpService.post('admin/selected-lead-valuation-delete', {ids})
}

export const getAllCompany = () => {
  return httpService.get('admin/get-all-company')
}

export const changeAllow = ({ id, allow }) => {
  return httpService.post('admin/change-allow', {id, allow})
}

export const deleteUser = ({ id }) => {
  return httpService.post('admin/delete-user', {id})
}

export const changeReceiverEmail = ({ email }) => {
  return httpService.post('admin/change-receiver', {email})
}

export const changeContactText = ({ contactText }) => {
  return httpService.post('admin/change-contact-text', {contactText})
}

export const customeUI = ({
  backImg,
  normalFont,
  labelFont,
  cardBackCol,
  headerCol,
  labelCol,
  popupText,
  headerText,
  popupCol
}) => {
  return httpService.post('admin/custom-ui', {
    backImg,
    normalFont,
    labelFont,
    cardBackCol,
    headerCol,
    labelCol,
    headerText,
    popupText,
    popupCol
  })
}

export const imageUpload = (formData) => {
  return httpService.post('admin/image-upload', formData)
}

export const saveQuestions = ({ questions }) => {
  return httpService.post('admin/save-question', {questions})
}

export const getQuestions = () => {
  return httpService.post('admin/get-question')
}