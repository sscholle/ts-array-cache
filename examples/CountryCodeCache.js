import { ArrayCache } from '../lib';

class CountryCodeCache {
  constructor() {
    this.countryCache = new ArrayCache('countryData');
  }

  fetch(callback = () => null) {
    if (this.countryCache.hasValues()) {
      callback(this.countryCache.get());
    } else {
      this.getCountryCodesRequest(callback);
    }
  }

  getCountryCodesRequest = (callback = () => null) => {
    const { jQuery } = global;
    jQuery.ajax(api.COUNTRY_CODES, {
      method: 'GET',
      success: (data) => {
        const countryData = data.countries;
        this.countryCache.set(countryData);
        callback(countryData);
      },
    });
  };
}

const countryCodeCache = new CountryCodeCache();
