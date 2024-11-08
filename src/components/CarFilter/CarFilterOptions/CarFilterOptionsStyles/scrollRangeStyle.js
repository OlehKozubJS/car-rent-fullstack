const scrollRangeStyle = `        
        .scroll-range-stator {
          width: 8px;

          position: relative;
        }

        .scroll-range-rotor {
          position: absolute;
          width: 8px;
          right: 0px;

          background-color: rgba(18, 20, 23, 0.05);

          border-radius: 10px;

          transition: 500ms;
        }
          
        .scroll-range-rotor:hover {
          background-color: rgba(18, 20, 23, 0.5);
        }`;

export { scrollRangeStyle };
