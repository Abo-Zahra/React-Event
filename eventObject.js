// THE EVENT OBJECT MODEL

/* 
RQUIERMENTS:
1. It contains 30/31 days based on the month of the 
year. (ATTAINED USING THE DATE CONSTRUCTOR)
2. Each event is a full day event. (initilized)
3. Date and time are crucial to avoid clashes for multiple seminars in the same venue, date and time. (initilized)
4. First comes, first served basis. (Not yet) needs if else statments or it can be replayced by visual illustration of the information
5. The event is operating from 8am until 5pm. (RECHECK)
*/

// REQUIRED VARIABES 
/**
 * WE SUPPOSEDLY GOING TO DECLARE ONE VARIABLE WITH THE NAME 'id', FOR INTERNAL MONGODB USE IF NEEDED 
 */

let EVENT; // IT SHOULD REPRESENT A FULL DAY EVENT
var eventName; // HAVE A UNIQUE NAME FOR EACH EVENT OBJECT
const eventVenue = [firstVenue, secondVenue, thirdVenue],
firstVenue = 'KICT MAIN HALL',
secondVenue = 'ECONS MAIN HALL',
thirdVenue = 'LAW MAIN COURT'; // SPECIFYING FEW UNIQUE eventVenue ATTRIBUTE VALUES, TO STATE WHERE THE EVENT IS TAKING ACTION
/*
* MAKING USE OF THE JS UTILITY PROVIDED, THE DATE CONSTRUCTOR
* USUALLY IS WRRITN IN THE FOLLOWING FORM >>> var Date = new Date();
*/ 
var Date; 
var operatingStartTime; // THE STARTING POINT OF ANY EVENT 
var operatingEndTime; // THE ENDING POINT OF ANY EVENT

class eventObject {
    
    constructor(){// DEFAULT CONSTRUCTOR
        /**
         * THE MAIN USAGE OF THE DEFAULT CONSTRUCTOR IS TO INITIALIZE THE SPECIFIC REQUIRED VALUE TYPES 
         * FOR ALL PREVIOUSLY DECLARED VARIABLES EACH BASED ON THEIR OWN UTILITY PERPOUSES
         */
        this.EVENT = {
            eventName: "",
            Date: Date( month, day, hours, minutes ),
            eventVenue: [""],
            operatingStartTime: Date( hours, minutes + '\t am' ),
            operatingEndTime: Date( hours , minutes + '\t pm' )
        }
    }

    constructor(EVENT){// OVER-RIDE THE DEFAULT CONSTRUCTOR TO INTERACT WITH THE OBJECT MODEL
        this.EVENT = EVENT;
    }

    // GEETERS AND SETTERS 
    get EVENT() { return this.EVENT; } // GETS EVENT OBJECT
    set EVENT(EVENT) { this.EVENT = EVENT; } // SETS EVENT OBJECT

    get eventName() { return this.eventName;} // GETS eventName ATTRIBUTE OF A PARTICULER EVENT OBJECT
    set eventName(eventName) { this.eventName = eventName; } // SETS eventName ATTRIBUTE OF A PARTICULER EVENT OBJECT

    get eventVenue() { return this.eventVenue; } // GETS eventVenue ATTRIBUTE OF A PARTICULER EVENT OBJECT
    set eventVenue(eventVenue) { this.eventVenue = eventVenue; } // SETS eventVenue ATTRIBUTE OF A PARTICULER EVENT OBJECT

    get Date() { return this.Date; } // GETS Date ATTRIBUTE CONSTRUCTOR FOR A PARTICULER EVENT OBJECT
    set Date(Date) { this.Date = Date; } // SETS Date ATTRIBUTE CONSTRUCTOR FOR A PARTICULER EVENT OBJECT

    get operatingStartTime() { return this.operatingStartTime; }
    set operatingStartTime(_operatingStartTime) {this.operatingStartTime = '08'+':'+'00'; } // PLEASE, VALIDATE AND FIX IF NACESSARY 

    get operatingEndTime() { return this.operatingEndTime; }
    set operatingEndTime(_operatingEndTime) {this.operatingStartTime = '05'+':'+'00'; } // PLEASE, VALIDATE AND FIX IF NACESSARY     

}

/* HOW TO RETRIVE DATE DATA
EVENT.getFullYear();      
EVENT.getMonth();         
EVENT.getDate();          
EVENT.getDay();           
EVENT.getHours();         
EVENT.getMinutes();       
EVENT.getSeconds();       
EVENT.getMilliseconds();  
EVENT.getTime();          
*/
