import {Injectable, provide, Provider} from '@angular/core';

// do whatever you want for logging here, add methods for log levels etc.
@Injectable()
export default class Logger {

  public log(logMsg:any, ...optionalParams:any[]) {
    console.log(logMsg, ...optionalParams); 
  }
}

export const LOGGING_PROVIDERS: Provider[] = [ provide(Logger, {useClass: Logger}) ];