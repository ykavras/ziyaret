import {
  VISITS_REQUEST,
  VISITS_SUCCESS,
  VISITS_FAILURE,
  company_name,
  customer_first_name,
  customer_last_name,
  customer_mobile_phone,
  customer_phone,
  is_decider,
  decider_first_name,
  decider_last_name,
  decider_mobile_phone,
  sector,
  city,
  district,
  present_type,
  referer_firt_name,
  referer_last_name,
  referer_mobile_phone,
  stand_area,
  stand_time,
  site_name,
  block_name,
  flat_no,
  interview_result,
  interview_result_detail,
  revisit_time,
  other_company,
  file,
  photo,
  voice,
  long,
  lat,
  dealer,
  offered_product
} from './types';
import api from '../../lib/api'

export const fetchingRequest = type => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });

export const postVisits = (
  company_name,
  customer_first_name,
  customer_last_name,
  customer_mobile_phone,
  customer_phone,
  is_decider,
  decider_first_name,
  decider_last_name,
  decider_mobile_phone,
  sector,
  city,
  district,
  present_type,
  referer_firt_name,
  referer_last_name,
  referer_mobile_phone,
  stand_area,
  stand_time,
  site_name,
  block_name,
  flat_no,
  interview_result,
  interview_result_detail,
  revisit_time,
  other_company,
  file, photo,
  voice,
  long,
  lat,
  dealer,
  offered_product
) => {
  const data = {
    company_name,
    customer_first_name,
    customer_last_name,
    customer_mobile_phone,
    customer_phone,
    is_decider,
    decider_first_name,
    decider_last_name,
    decider_mobile_phone,
    sector,
    city,
    district,
    present_type,
    referer_firt_name,
    referer_last_name,
    referer_mobile_phone,
    stand_area,
    stand_time,
    site_name,
    block_name,
    flat_no,
    interview_result,
    interview_result_detail,
    revisit_time,
    other_company,
    file, photo,
    voice,
    long,
    lat,
    dealer,
    offered_product
  };
  console.log(data)
  return async dispatch => {
    dispatch(fetchingRequest(VISITS_REQUEST));
    try {
      const response = await api.post('visits/', data);
      const payload = await response.data;
      dispatch(fetchingSuccess(VISITS_SUCCESS, payload));
    } catch (error) {
      dispatch(fetchingFailure(VISITS_FAILURE, error.response));
    }
  }
};

export const companyName = (text) => { return { type: company_name, payload: text } };
export const customerFirstName = (text) => { return { type: customer_first_name, payload: text } };
export const customerLastName = (text) => { return { type: customer_last_name, payload: text } };
export const customerMobilePhone = (text) => { return { type: customer_mobile_phone, payload: text } };
export const customerPhone = (text) => { return { type: customer_phone, payload: text } };

export const isDecider = (text) => { return { type: is_decider, payload: text } };
export const deciderFirstName = (text) => { return { type: decider_first_name, payload: text } };
export const deciderLastName = (text) => { return { type: decider_last_name, payload: text } };
export const deciderMobilePhone = (text) => { return { type: decider_mobile_phone, payload: text } };

export const sectorChanged = (text) => { return { type: sector, payload: text } };

export const cityChanged = (text) => { return { type: city, payload: text } };
export const districtChanged = (text) => { return { type: district, payload: text } };

export const presentType = (text) => { return { type: present_type, payload: text } };

export const refererFirstName = (text) => { return { type: referer_firt_name, payload: text } };
export const refererLastName = (text) => { return { type: referer_last_name, payload: text } };
export const refererMobilePhone = (text) => { return { type: referer_mobile_phone, payload: text } };

export const standArea = (text) => { return { type: stand_area, payload: text } };
export const standTime = (text) => { return { type: stand_time, payload: text } };

export const siteName = (text) => { return { type: site_name, payload: text } };
export const blockName = (text) => { return { type: block_name, payload: text } };
export const flatNo = (text) => { return { type: flat_no, payload: text } };

export const interviewResult = (text) => { return { type: interview_result, payload: text } };
export const interviewResultDetail = (text) => { return { type: interview_result_detail, payload: text } };


export const revisitTime = (text) => { return { type: revisit_time, payload: text } };
export const otherCompany = (text) => { return { type: other_company, payload: text } };

export const fileChanged = (text) => { return { type: file, payload: text } };
export const photoChanged = (text) => { return { type: photo, payload: text } };
export const voiceChanged = (text) => { return { type: voice, payload: text } };

export const longChanged = (text) => { return { type: long, payload: text } };
export const latChanged = (text) => { return { type: lat, payload: text } };

export const dealerChanged = (text) => { return { type: dealer, payload: text } };

export const offeredProduct = (text) => { return { type: offered_product, payload: text } };

