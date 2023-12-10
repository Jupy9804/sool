import "./style4.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


  
function Sub4(props){

  const [images, setImages] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/api/sakes') // API 엔드포인트 변경 필요
          .then(response => {
              setImages(response.data);
              console.log(response.data);
          })
          .catch(error => {
              console.error('Error fetching data: ', error);
          });
  }, []);

    return (
      
    <div className="frame">
      <div className="sub1-wrapper">
        <div className="sub1">
          <div className="main-page">
            <div className="group">
              <div className="sub1-group">
                <div className="text-wrapper">Drink Gallery</div>
              </div>
            </div>
            <div className="sub1-group-wrapper">
              <div className="div2">
                <p className="p">
               <img src="https://raw.githubusercontent.com/Jupy9804/sool/0b2e626d8661cab964730ce20cf6d5559c50afe9/svg/overlap-group-wrapper.svg"/>

                </p>
                <div className="text-sub1-2"><img src="https://raw.githubusercontent.com/Jupy9804/sool/72771277cc638e07b5fda24eb07b9de139b3f962/svg/text-wrapper2.svg"/>
</div>
              </div>
            </div>
            <div className="div-wrapper">
              
            <div className="main-group-11">
              
              
              <div className="text-main-6"><img src="https://raw.githubusercontent.com/Jupy9804/sool/3ca4f93cd8b76e5071a995f9e08ef5c45bc81305/svg/text-wrapper6.svg"/>
</div>
              <div className="text-main-7"><img src="https://raw.githubusercontent.com/Jupy9804/sool/3ca4f93cd8b76e5071a995f9e08ef5c45bc81305/svg/text-wrapper7.svg"/>

</div>
              <div className="main-k-traditional-drink"><img src="https://raw.githubusercontent.com/Jupy9804/sool/3ca4f93cd8b76e5071a995f9e08ef5c45bc81305/svg/k-traditonal-drink.svg"/>
</div>
              <div className="text-main-8"><img src="https://raw.githubusercontent.com/Jupy9804/sool/3ca4f93cd8b76e5071a995f9e08ef5c45bc81305/svg/text-wrapper8.svg"/>
</div>
              <div className="main-group-12">
                <div className="main-group-4">
                  <div className="text-main-9">Sool</div>
                </div>
              </div>
            </div>
         
            <div className="sub1-3">
              <div className="sub1-3">


                <div className="sub1-4">
                  <div className="sub1-group-3">
                    <div className="text-sub1-6">Sool</div>
                    
                  </div>
                </div>
                <p className="text-sub1-7">

                <div>
            

        </div>

          
            
                </p>
                <div className="text-sub1-8"><img src="https://raw.githubusercontent.com/Jupy9804/sool/98f0401e8a3d452d84b135c4ef4aef41218990e7/svg/subtext-wrapper8.svg"/>
</div>
                <img className="sub1-sns-instar" alt="Sns instar" src="https://github.com/Jupy9804/sool/blob/main/img/sns-instar.png?raw=true" />
            <img className="sub1-sns-blog" alt="Sns blog" src="https://github.com/Jupy9804/sool/blob/main/img/sns-blog.png?raw=true" />
            <img className="sub1-sns-facebook" alt="Sns facebook" src="https://github.com/Jupy9804/sool/blob/main/img/sns-facebook.png?raw=true" />
              </div>
            </div>
          </div>
          <div className="sub1-5">
      <div className="text-sub1-9">이름</div>
      {images.map((image, index) => (
        <div key={index} className="custom-image-container">
          {/* 이미지와 관련된 속성을 사용하여 표시 */}
          <img
            src={image.sake_image}
            
            className="custom-image"
          />
        
        </div>
      ))}

 
      </div>
           
          </div>
          <div className="sub1-6">
            <div className="text-sub1-11">이름</div>
            {images.map((image, index) => (
        <div key={index} className="custom-image-container">
          {/* 이미지와 관련된 속성을 사용하여 표시 */}
          <img
            src={image.sake_image}
            
            className="custom-image2"
          />
        
        </div>
      ))}
            <p className="text-sub1-12">
            
            </p>
            
           
          </div>
          <div className="sub1-7">
          <div className="text-sub1-13">시음 체험 프로그램</div>
          {images.map((image, index) => (
        <div key={index} className="custom-image-container">
          {/* 이미지와 관련된 속성을 사용하여 표시 */}
          <img
            src={image.sake_image}
            
            className="custom-image2"
          />
        
        </div>
      ))}
           
         
          
          </div>
          <div className="sub1-8">
          <div className="text-sub1-15">이름</div>
          {images.map((image, index) => (
        <div key={index} className="custom-image-container">
          {/* 이미지와 관련된 속성을 사용하여 표시 */}
          <img
            src={image.sake_image}
            
            className="custom-image2"
          />
        
        </div>
      ))}
          
           
            </div>
            <p className="text-sub1-16">
            
            </p>
          </div>
        </div>
      </div>
  

  
    
  );
};

export default Sub4;
