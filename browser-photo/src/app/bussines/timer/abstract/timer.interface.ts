interface Timer{
       time: Date;

       start(): void;
       pause(): void;
       reset(): void;
       passUpdatedValue(value: string): void;
       onComplete(): any;

}