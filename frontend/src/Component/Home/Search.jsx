

import style from "./search.module.css";
const Search = () => {
  return (
    <div>
      <div className={style.searchbar}>
        <div className={style.searchbar_one}>
          <div style={{fontSize:"25px",fontWeight:"bold"}}>What are you looking for?</div>
        </div>
        <div className={style.searchbar_two}>
          <div className={style.input_first}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34 34"
              class="c-cZuCZG c-cZuCZG-gtZKQU-size-large c-cZuCZG-dmsdwv-rotate-up c-cZuCZG-ihxkVYy-css"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M16.4895 15.5071C16.2159 15.2339 15.7727 15.2344 15.4996 15.508C15.2264 15.7816 15.2269 16.2248 15.5005 16.4979L16.4895 15.5071ZM19.5055 20.4954C19.7791 20.7685 20.2223 20.7681 20.4954 20.4945C20.7685 20.2209 20.7681 19.7777 20.4945 19.5046L19.5055 20.4954ZM8.69953 14.8717C9.03535 15.0632 9.46285 14.9462 9.65437 14.6104C9.8459 14.2745 9.72891 13.847 9.39309 13.6555L8.69953 14.8717ZM8.22704 12.5081C8.03023 12.1754 7.60093 12.0651 7.26818 12.262C6.93542 12.4588 6.82522 12.8881 7.02202 13.2208L8.22704 12.5081ZM15.5005 16.4979L19.5055 20.4954L20.4945 19.5046L16.4895 15.5071L15.5005 16.4979ZM17.3175 10.8957C17.3175 14.3068 14.5038 17.0914 11.0088 17.0914V18.4914C15.2554 18.4914 18.7175 15.1014 18.7175 10.8957H17.3175ZM11.0088 17.0914C7.51375 17.0914 4.7 14.3068 4.7 10.8957H3.3C3.3 15.1014 6.76211 18.4914 11.0088 18.4914V17.0914ZM4.7 10.8957C4.7 7.4846 7.51375 4.7 11.0088 4.7V3.3C6.76211 3.3 3.3 6.69002 3.3 10.8957H4.7ZM11.0088 4.7C14.5038 4.7 17.3175 7.4846 17.3175 10.8957H18.7175C18.7175 6.69002 15.2554 3.3 11.0088 3.3V4.7ZM9.39309 13.6555C8.91098 13.3806 8.50913 12.9851 8.22704 12.5081L7.02202 13.2208C7.42809 13.9074 8.00629 14.4763 8.69953 14.8717L9.39309 13.6555Z"
                fill="#8897A2"
              ></path>
            </svg>
          </div>
          <input className={style.input_second} placeholder="search here..." />
          <button className={style.input_third}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
