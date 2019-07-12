import {
  VISITS_REQUEST,
  VISITS_SUCCESS,
  VISITS_FAILURE,
  company_name, customer_first_name, customer_last_name, customer_mobile_phone, customer_phone,
  is_decider, decider_first_name, decider_last_name, decider_mobile_phone,
  sector,
  city, district,
  present_type,
  referer_firt_name, referer_last_name, referer_mobile_phone,
  stand_area, stand_time,
  site_name, block_name, flat_no,
  interview_result, interview_result_detail,
  revisit_time, other_company,
  file, photo, voice,
  long, lat,
  dealer,
  offered_product
} from '../actions/types';

const INITIAL_STATE = {
  isPost: false, isPostErrorMessage: null, post: null,
  company_name: '', customer_first_name: '', customer_last_name: '', customer_mobile_phone: '', customer_phone: '',
  is_decider: false, decider_first_name: '', decider_last_name: '', decider_mobile_phone: '',
  sector: '',
  city: '', district: '',
  present_type: null,
  referer_firt_name: '', referer_last_name: '', referer_mobile_phone: '',
  stand_area: '', stand_time: '',
  site_name: '', block_name: '', flat_no: '',
  interview_result: '', interview_result_detail: '',
  revisit_time: null, other_company: '',
  file: null, photo: null, voice: null,
  long: '', lat: '',
  dealer: null,
  offered_product: null
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    //POST INTERVIEW
    case VISITS_REQUEST:
      return { ...state, isPost: true, isPostErrorMessage: null, post: null };
    case VISITS_SUCCESS:
      return { ...state, isPost: false, post: payload };
    case VISITS_FAILURE:
      return { ...state, isPost: false, isPostErrorMessage: payload };

    //FIELS
    case company_name: return { ...state, company_name: payload };
    case customer_first_name: return { ...state, customer_first_name: payload };
    case customer_last_name: return { ...state, customer_last_name: payload };
    case customer_mobile_phone: return { ...state, customer_mobile_phone: payload };
    case customer_phone: return { ...state, customer_phone: payload };

    case is_decider: return { ...state, is_decider: payload };
    case decider_first_name: return { ...state, decider_first_name: payload };
    case decider_last_name: return { ...state, decider_last_name: payload };
    case decider_mobile_phone: return { ...state, decider_mobile_phone: payload };

    case sector: return { ...state, sector: payload };

    case city: return { ...state, city: payload };
    case district: return { ...state, district: payload };

    case present_type: return { ...state, present_type: payload };

    case referer_firt_name: return { ...state, referer_firt_name: payload };
    case referer_last_name: return { ...state, referer_last_name: payload };
    case referer_mobile_phone: return { ...state, referer_mobile_phone: payload };

    case stand_area: return { ...state, stand_area: payload };
    case stand_time: return { ...state, stand_time: payload };

    case site_name: return { ...state, site_name: payload };
    case block_name: return { ...state, block_name: payload };
    case flat_no: return { ...state, flat_no: payload };

    case interview_result: return { ...state, interview_result: payload };
    case interview_result_detail: return { ...state, interview_result_detail: payload };

    case revisit_time: return { ...state, revisit_time: payload };
    case other_company: return { ...state, other_company: payload };

    case file: return { ...state, file: payload };
    case photo: return { ...state, photo: payload };
    case voice: return { ...state, voice: payload };

    case long: return { ...state, long: payload };
    case lat: return { ...state, lat: payload };

    case dealer: return { ...state, dealer: payload };
    case offered_product: return { ...state, offered_product: payload };

    default:
      return state;
  }
}
