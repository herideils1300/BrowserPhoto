
//@Injectable({providedIn: "any"})
export class ResetTimer implements Timer {

       time: Date = new Date();
       intervalId: number = 0;
       private onCompleteValue = () => { };

       public set onComplete(value: any) {
              this.onCompleteValue = value;
       }

       passUpdatedValue(value: string): void {
              value = this.time.toUTCString();
       }

       public start(): void {
              this.intervalId = setInterval(() => {
                     this.time.setDate(this.time.getDate() - 1000);
                     if (this.time.getTime() === 0) {
                            this.onComplete();
                     }
              }, 1000
              )
       }
       public pause(): void {
              if (this.intervalId !== 0) {
                     clearInterval(this.intervalId);
              }
       }
       public reset(): void {
              if (this.intervalId !== 0) {
                     clearInterval(this.intervalId);
              }
              this.time = new Date();
       }

}