/**
 * computes row spans on individual table columns
 */
 export class RowSpanComputer {
    row:any
    
    compute(data: Object[], columns: string[]): Array<Span[]> {
   
       const spans: Array<Span[]> = this.initSpans(columns);
       
       const spanColumnContexts: SpanColumnContext[] = new Array(columns.length);
       
       for ( this.row of data) {
          for (let iCol = 0; iCol < columns.length; iCol++) {
             const column:any = columns[iCol];
             const spanColumnContext:any = spanColumnContexts[iCol];
           
             if (spanColumnContext && spanColumnContext.spannedRow[column] == this.row[column]) {
                ++spanColumnContext.span.span;
                spans[iCol].push({ span: 0 });
             } else {
                const span = { span: 1 };
                spanColumnContexts[iCol] = { span: span, spannedRow: this.row };
                spans[iCol].push( span );
                spanColumnContexts.slice(iCol + 1).forEach(c => c.spannedRow = {});
             }
          }
       }
       
       return spans;
    }
 
    private initSpans(columns: string[]): Array<Span[]> {
       const spans: Array<Span[]> = [];
       columns.forEach(p => spans.push([]));
       return spans;
     }
 }
 
 export interface Span {
   span: number;
 }
 
 interface SpanColumnContext {
    span: Span;
    spannedRow: Object;
 }