import React from 'react';
import './chips.style.scss';


function Chips(props){
    return(
        <React.Fragment>
        
        
          <span className="star">

     <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.97282 1.01406C7.40857 0.195185 8.59142 0.195183 9.02718 1.01406L10.6916 4.14191C10.8597 4.4577 11.166 4.67833 11.5208 4.7392L15.0355 5.34215C15.9556 5.5 16.3212 6.61537 15.6703 7.27931L13.1843 9.81537C12.9334 10.0714 12.8164 10.4284 12.8676 10.7818L13.3754 14.2823C13.5083 15.1987 12.5513 15.8881 11.7133 15.4795L8.51246 13.9191C8.1893 13.7615 7.8107 13.7615 7.48754 13.9191L4.28666 15.4795C3.44867 15.8881 2.49172 15.1987 2.62465 14.2823L3.13238 10.7818C3.18364 10.4284 3.06665 10.0714 2.81566 9.81537L0.329676 7.27931C-0.321157 6.61537 0.0443617 5.5 0.964507 5.34215L4.47919 4.7392C4.83403 4.67833 5.14032 4.4577 5.30836 4.14191L6.97282 1.01406Z" fill="#929DD2"/>
        <path d="M26.9728 1.01406C27.4086 0.195185 28.5914 0.195183 29.0272 1.01406L30.6916 4.14191C30.8597 4.4577 31.166 4.67833 31.5208 4.7392L35.0355 5.34215C35.9556 5.5 36.3212 6.61537 35.6703 7.27931L33.1843 9.81537C32.9334 10.0714 32.8164 10.4284 32.8676 10.7818L33.3754 14.2823C33.5083 15.1987 32.5513 15.8881 31.7133 15.4795L28.5125 13.9191C28.1893 13.7615 27.8107 13.7615 27.4875 13.9191L24.2867 15.4795C23.4487 15.8881 22.4917 15.1987 22.6246 14.2823L23.1324 10.7818C23.1836 10.4284 23.0666 10.0714 22.8157 9.81537L20.3297 7.27931C19.6788 6.61537 20.0444 5.5 20.9645 5.34215L24.4792 4.7392C24.834 4.67833 25.1403 4.4577 25.3084 4.14191L26.9728 1.01406Z" fill="#929DD2"/>
        <path d="M46.9728 1.01406C47.4086 0.195185 48.5914 0.195183 49.0272 1.01406L50.6916 4.14191C50.8597 4.4577 51.166 4.67833 51.5208 4.7392L55.0355 5.34215C55.9556 5.5 56.3212 6.61537 55.6703 7.27931L53.1843 9.81537C52.9334 10.0714 52.8164 10.4284 52.8676 10.7818L53.3754 14.2823C53.5083 15.1987 52.5513 15.8881 51.7133 15.4795L48.5125 13.9191C48.1893 13.7615 47.8107 13.7615 47.4875 13.9191L44.2867 15.4795C43.4487 15.8881 42.4917 15.1987 42.6246 14.2823L43.1324 10.7818C43.1836 10.4284 43.0666 10.0714 42.8157 9.81537L40.3297 7.27931C39.6788 6.61537 40.0444 5.5 40.9645 5.34215L44.4792 4.7392C44.834 4.67833 45.1403 4.4577 45.3084 4.14191L46.9728 1.01406Z" fill="#929DD2"/>
        <path d="M66.9728 1.01406C67.4086 0.195185 68.5914 0.195183 69.0272 1.01406L70.6916 4.14191C70.8597 4.4577 71.166 4.67833 71.5208 4.7392L75.0355 5.34215C75.9556 5.5 76.3212 6.61537 75.6703 7.27931L73.1843 9.81537C72.9334 10.0714 72.8164 10.4284 72.8676 10.7818L73.3754 14.2823C73.5083 15.1987 72.5513 15.8881 71.7133 15.4795L68.5125 13.9191C68.1893 13.7615 67.8107 13.7615 67.4875 13.9191L64.2867 15.4795C63.4487 15.8881 62.4917 15.1987 62.6246 14.2823L63.1324 10.7818C63.1836 10.4284 63.0666 10.0714 62.8157 9.81537L60.3297 7.27931C59.6788 6.61537 60.0444 5.5 60.9645 5.34215L64.4792 4.7392C64.834 4.67833 65.1403 4.4577 65.3084 4.14191L66.9728 1.01406Z" fill="#929DD2"/>
        <path d="M86.9728 1.01406C87.4086 0.195185 88.5914 0.195183 89.0272 1.01406L90.6916 4.14191C90.8597 4.4577 91.166 4.67833 91.5208 4.7392L95.0355 5.34215C95.9556 5.5 96.3212 6.61537 95.6703 7.27931L93.1843 9.81537C92.9334 10.0714 92.8164 10.4284 92.8676 10.7818L93.3754 14.2823C93.5083 15.1987 92.5513 15.8881 91.7133 15.4795L88.5125 13.9191C88.1893 13.7615 87.8107 13.7615 87.4875 13.9191L84.2867 15.4795C83.4487 15.8881 82.4917 15.1987 82.6246 14.2823L83.1324 10.7818C83.1836 10.4284 83.0666 10.0714 82.8157 9.81537L80.3297 7.27931C79.6788 6.61537 80.0444 5.5 80.9645 5.34215L84.4792 4.7392C84.834 4.67833 85.1403 4.4577 85.3084 4.14191L86.9728 1.01406Z" fill="#929DD2"/>
    </svg>
     
        </span>   
    
        <span className="rating">{props.rating}</span>
       


        <span className="right-line">
        <svg width="1" height="14" viewBox="0 0 1 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.25" y1="-1.09278e-08" x2="0.250001" y2="14" stroke="#CCCCCC" stroke-width="0.5"/>
        </svg>
        </span>


        <span className="heart"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.37258 2.30715C3.20269 0.477043 6.16989 0.477043 8 2.30715C9.83011 0.477043 12.7973 0.477043 14.6274 2.30715C16.4575 4.13726 16.4575 7.10446 14.6274 8.93457C14.6274 8.93459 14.6274 8.9346 14.6274 8.93462L14.6274 8.93471L9.06069 14.5015C8.4749 15.0872 7.52516 15.0872 6.93937 14.5015L1.37261 8.93471L1.37267 8.93465C1.37264 8.93462 1.37261 8.9346 1.37258 8.93457C-0.457527 7.10446 -0.457527 4.13726 1.37258 2.30715Z" fill="#929DD2"/>
         </svg></span>

        
        <span className="store">{props.store}</span>

        </React.Fragment>
    )
}



export default Chips;