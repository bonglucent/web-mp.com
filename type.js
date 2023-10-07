function sleep(ms){
return new Promise((resolve)=>setTimeout(resolve,ms))
}
const phrases=["Hi, I am Milan.There is a opportunity to learn NCERT Biology with BONG LUCENT for all Bengal Students who want to crack NEET .Learn and grow with our wide range of courses.Thank you for visiting our platform.Also visit my You Tube Channel,,,", "NEET aspirants, your dream of becoming a doctor is a journey of resilience and dedication. Remember, every challenge you face today brings you closer to a brighter tomorrow.Believe in yourself, for the world needs more compassionate doctors like you.Diligence is the mother of good luck.", "Fuel your ambition with the fire of determination! The path to becoming a doctor is not for the faint-hearted. Embrace the heat of hard work .Your journey is a blazing trail of endless possibilities. Blaze forward with unwavering resolve, and together, we'll set the world on fire with your healing touch!","Life's most extraordinary achievements are born from the hottest flames of determination. Let your passion burn brighter, let your efforts sizzle, and let your ambition set the world aglow with your brilliance. Keep forging ahead, and your future as a healer will be nothing short of scorching.","Aspiring doctors, your determination is your superpower. Embrace the challenges, fuel your dreams, and stay committed. With each step, you're one step closer to saving lives and making a difference. Keep going, and let your journey inspire others to follow their path. Success is within your reach; keep believing, keep achieving.","NEET aspirants, your journey to becoming a doctor is like a magnificent tapestry. Each day you dedicate to your studies, each hurdle you overcome, adds a unique thread to this beautiful fabric of your future.","Keep weaving your dreams with determination and patience. Picture yourself as a healer, a source of comfort, and a beacon of hope for those in need. Your journey may have challenges, but remember, every great doctor started where you are today.","Stay focused, stay inspired, and never lose sight of your goal. The world needs compassionate doctors like you. Your dedication today will create a healthier, happier world tomorrow.","Embrace the process, trust your journey, and soon you'll be the doctor you've always dreamed of becoming. Keep the flame of your ambition alive, for it will light the way to your success.","NEET aspirants of the modern era, you are the architects of tomorrow's healthcare landscape. In this age of innovation and progress, your journey to becoming a doctor is a testament to your adaptability and ambition.","In this digital age, your reach is limitless, and your impact boundless. Keep your vision clear, your heart compassionate, and your spirit unyielding. The modern world needs doctors like you, who are ready to embrace change and lead the way to a healthier and brighter future." ];
const el=document.getElementById("pip");
let sleeptime=50;
let curPhraseIndex=0;
const writeLoop=async()=>{ 
    while(true){
        let curWord=phrases[curPhraseIndex];
         for ( let i=0;i<curWord.length;i++)
         {
            el.innerText=curWord.substring(0,i +1);
            await sleep(sleeptime);

        }
        await sleep(sleeptime * 130);

        for ( let i=curWord.length;i>0; i-- ){
            el.innerText=curWord.substring(0,i -1);
            await sleep(sleeptime);
         }
         await sleep(sleeptime * 5);
         if (curPhraseIndex===phrases.length-1){
            curPhraseIndex=0;
         }
         else{
            curPhraseIndex++;
         }


    }
};
writeLoop();
