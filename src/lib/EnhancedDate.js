class EnhancedDate {
  _date // 월은 0부터 시작

  constructor(
    year, 
    month, 
    day,
    hours,
    minutes
  ) {
    if(year === undefined) this._date = new Date()
    else if(month === undefined) this._date = new Date(year)
    else if(day === undefined) this._date = new Date(year, month-1) 
    else if(hours === undefined) this._date = new Date(year, month-1, day)
    else if(minutes === undefined) this._date = new Date(year, month-1, day, hours)
    else this._date = new Date(year, month - 1, day, hours, minutes) 
  }

  get all () {
    return this._date
  }

  get date () {
    return this._date.getDate()
  }

  get minutes () {
    return this._date.getMinutes()
  }
  get hours () {
    return this._date.getHours()
  }
  
  get day () {
    return this._date.getDay()
  }
  get month () {
    return this._date.getMonth() + 1
  }
  get year () {
    return this._date.getFullYear()
  }
}

export default EnhancedDate