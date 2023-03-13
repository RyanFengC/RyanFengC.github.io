function _0x1ec1(){var _0x4b8b2e=['9200871CjlTTq','replace','2295332gpDkJo','889eiVQst','toString','\x5cw+','split','x\x203\x20y(){4=z\x205.A(\x22./B/4.C\x22),9.b(\x22D\x204...\x22)}6\x202=c.f(\x22E\x22),h=c.f(\x22F\x22);3\x20G(){7\x20e=2.j;g(e)}3\x20k(e){7\x20t=p.q(e);6\x20n=0,i=0;H(6\x20e=0;e<t.I;e++)t[e]>i&&(n=e,i=t[e]);J{s:n,u:i}}3\x20g(e){7\x20t=5.K.L(2,1),n=5.M.N(t,[8,8]);6\x20i=n.O([1,8,8,1]);v=i.P(5.Q(R));7\x20l=4.g(v),o=l.S(),{s:m,u:r}=k(o),d=p.q(o),a=d.T(U.V(...d));9.b(o),9.b(a),c.f(\x22W\x22).X=a}h.Y(\x22Z\x22,e=>{2.j=10.11(e.12.13[0]),2.14=w,2.15=w},!1);','5738irDtRE','9935830azSxnO','3einLsK','4722515KGLHZA','384732VZilTf','51048eHLajk','50UDuFOC'];_0x1ec1=function(){return _0x4b8b2e;};return _0x1ec1();}function _0x21b1(_0x31fc97,_0x30228e){var _0x1ec1c6=_0x1ec1();return _0x21b1=function(_0x21b157,_0x2ab025){_0x21b157=_0x21b157-0x119;var _0x4b8181=_0x1ec1c6[_0x21b157];return _0x4b8181;},_0x21b1(_0x31fc97,_0x30228e);}var _0xb55774=_0x21b1;(function(_0x52a581,_0xeee3ad){var _0x235ed2=_0x21b1,_0xad0b59=_0x52a581();while(!![]){try{var _0x4492a4=parseInt(_0x235ed2(0x126))/0x1*(parseInt(_0x235ed2(0x11d))/0x2)+-parseInt(_0x235ed2(0x119))/0x3*(-parseInt(_0x235ed2(0x120))/0x4)+-parseInt(_0x235ed2(0x11a))/0x5+-parseInt(_0x235ed2(0x11b))/0x6+parseInt(_0x235ed2(0x121))/0x7*(parseInt(_0x235ed2(0x11c))/0x8)+parseInt(_0x235ed2(0x11e))/0x9+-parseInt(_0x235ed2(0x127))/0xa;if(_0x4492a4===_0xeee3ad)break;else _0xad0b59['push'](_0xad0b59['shift']());}catch(_0x434812){_0xad0b59['push'](_0xad0b59['shift']());}}}(_0x1ec1,0x85bc5),eval(function(_0x2416f3,_0x23418a,_0x5c6cdf,_0x30b076,_0xd1300b,_0x18bffa){var _0x1772cc=_0x21b1;_0xd1300b=function(_0x5f42ed){var _0x2b1d32=_0x21b1;return(_0x5f42ed<_0x23418a?'':_0xd1300b(parseInt(_0x5f42ed/_0x23418a)))+((_0x5f42ed=_0x5f42ed%_0x23418a)>0x23?String['fromCharCode'](_0x5f42ed+0x1d):_0x5f42ed[_0x2b1d32(0x122)](0x24));};if(!''[_0x1772cc(0x11f)](/^/,String)){while(_0x5c6cdf--)_0x18bffa[_0xd1300b(_0x5c6cdf)]=_0x30b076[_0x5c6cdf]||_0xd1300b(_0x5c6cdf);_0x30b076=[function(_0x4080cd){return _0x18bffa[_0x4080cd];}],_0xd1300b=function(){var _0x131c25=_0x1772cc;return _0x131c25(0x123);},_0x5c6cdf=0x1;};while(_0x5c6cdf--)if(_0x30b076[_0x5c6cdf])_0x2416f3=_0x2416f3[_0x1772cc(0x11f)](new RegExp('\x5cb'+_0xd1300b(_0x5c6cdf)+'\x5cb','g'),_0x30b076[_0x5c6cdf]);return _0x2416f3;}(_0xb55774(0x125),0x3e,0x44,'||imgElement|function|model|tf|let|const|28|console||log|document|||getElementById|predict|inputElement||src|findMaxIndex|||||Array|from||predNum||prob|resize_image_normalize|144|async|init|await|loadLayersModel|models|json|load|canvasInput|inputfile|submit|for|length|return|browser|fromPixels|image|resizeBilinear|reshape|div|scalar|255|dataSync|indexOf|Math|max|predit_result|innerHTML|addEventListener|change|URL|createObjectURL|target|files|width|height'[_0xb55774(0x124)]('|'),0x0,{})));
// async function init(){
//     model= await tf.loadLayersModel('./models/model.json');
//     console.log('load model...');
// }

// let imgElement = document.getElementById('canvasInput');
// let inputElement = document.getElementById('inputfile');
// inputElement.addEventListener('change', (e) => {
//     imgElement.src = URL.createObjectURL(e.target.files[0]);
//     imgElement.width=144;
//     imgElement.height=144;
// }, false);

// function submit(){
//     const inputImage = imgElement.src;
//     predict(inputImage);
// }

// function findMaxIndex(result){
//     const arr = Array.from(result);
//     let maxIndex=0;
//     let maxValue=0;
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]>maxValue){
//         maxIndex=i;
//         maxValue=arr[i]
//       }
//     }
//     return {predNum: maxIndex, prob: maxValue};
//   }

// function predict(imgelement){
//     // 將輸入照片轉換成轉換為矩陣
//     const tfimage = tf.browser.fromPixels(imgElement, 1);
//     // 強制將圖片縮小到 28*28 像素
//     const resize_image = tf.image.resizeBilinear(tfimage, [28, 28]);
//     // 將 tensor 設為浮點型態，且將張量攤平至一為矩陣。此時 shape 為 [1, 784]
//     let resize_image_reshape = resize_image.reshape([1, 28, 28, 1]);
//     // 將所有數值除以255
//     resize_image_normalize=resize_image_reshape.div(tf.scalar(255));
//     // 預測 
//     const pred = model.predict(resize_image_normalize);
//     const result = pred.dataSync();
//     // 取得 one hot encoding 陣列中最大的索引
//     const {predNum, prob} = findMaxIndex(result);
//     const arr = Array.from(result);
//     const predict_number = arr.indexOf(Math.max(...arr));
//     //查使用argMax(1)
//     //https://stackoverflow.com/questions/70706030/make-prediction-with-cnn-sign-language-model-tensorflowjs
//     //console.log(predNum, prob);
//     console.log(result);
//     console.log(predict_number);
//     document.getElementById('predit_result').innerHTML=predict_number;

// }