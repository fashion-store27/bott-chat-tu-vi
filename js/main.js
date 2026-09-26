 $(document).ready(function (e) {
const employeeBox = `
    <div class="employee-box">
        <div class="employee-avatar-wrap">
            <img src="./img/kol.jpg" alt="" width="100" height="100" class="employee-avatar">
        </div>
        <p class="employee-name">หมอลักษณ์ ฟันธง</p>
        <p class="employee-des">ผู้ติดตาม 2.5 ล้าน คน • กำลังติดตาม 6 คน</p>
        <button class="follow-btn">Follow</button>
    </div>
`;

    const genderTop = '<div class="chat-content-gender-desc"><p class="title"></p><p class="title"></p></div>';
    function t(e, t = !1, a = "") {
        var n = "",
            o = "",
            i = "";
        return (
            "manager" === e && (n = '<img class="chat-content-desc-image" src="img/kol.png" alt="" />'),
            t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
            '<div class="chat-content-item ' + e + " " + o + '"><div class="chat-content-desc">' + n + '<div class="chat-content-desc-item ' + e + '"><p' + i + ">" + a + "</p></div></div></div>"
        );
    }
    

    function a(a) {
        console.log('e', e.managerDialog[1]);
        console.log('a', a);
        $(".chat-content-buttons-gender").remove(),
            $(".chat-content-list").append(t("user")),
            $(".chat-content-item.user:last p").html(e.managerDialog[4][a].text),
            $(".chat-content-list").append(t("manager")),
            $(".chat-content-item.manager:last p").typed({
                strings: [e.managerDialog[5].text],
                showCursor: !1,
                callback: function () {
                    setTimeout(function () {
                        var n = "", o = "", r = "", i;
                        $(".chat-content-list").append(
                            '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day"><option value="" selected="selected">วัน</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                return n;
                            })() +
                            '</select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month"><option value="" selected="selected">เดือน</option>' +
                            ($.each(e.DateBirthday[0].month, function (e, t) {
                                o += '<option value="' + (e + 1) + '">' + t + "</option>";
                            }),
                                o) +
                            '</select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year"><option value="" selected="selected">ปี</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++) r += '<option value="' + i + '">' + i + "</option>";
                                return r;
                            })() +
                            "</select></div></div></form>"
                        ),
                            e.Scroll();
                        var c,
                            s = [],
                            d = $('form[name="questionForm"]');
                        d.find("select").addClass("empty_field"),
                            d.find("select").change(function () {
                                if (
                                    (d.find("select").each(function () {
                                        "" != $(this).val() ? $(this).removeClass("empty_field") : $(this).addClass("empty_field"), (s[this.name] = $(this).val());
                                    }),
                                        0 == d.find(".empty_field").length)
                                ) {
                                    d.remove();
                                    var n = e.MonthVariantType[s.month - 1],
                                        o = e.MonthVariant[n][0],
                                        i = e.MonthVariant[n][1],
                                        r = e.MonthVariant[n][2];
                                    (c = [s.year]),
                                        (c = e.getZodiak(c)),
                                        (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                                        (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                                        $(".chat-content-list").append(t("user", "date")),
                                        $(".chat-content-item.user.text-date p").html(s.day + "." + s.month + "." + s.year);
                                    var l = [],
                                        m = [],
                                        p = { zodie: e.ZodiakName[c - 1].name, date: s.day, month1: o, month2: i, month3: r, year: s.year, number: e.randomIntFromInterval(4, 10) };
                                        
                                   $(".chat-content-list").append(t("manager", "zodiac-info"));
                                $(".chat-content-item.manager.text-zodiac-info p").typed({
                                    strings: [`
    <img src="${e.ZodiakName[c - 1].image}" 
         alt="${p.zodie}" 
         style="width: 100px; height: 100px; display: block; margin: 0 auto;" />
    <div style="text-align:center; font-weight:bold; color:red">${p.zodie}</div><br>
    ${e.ZodiakName[c - 1].description.replace(/\n/g, '<br>')}
`],

                                    showCursor: !1,
                                    callback: function () {
                                        // Tiếp tục các tin nhắn khác (đã được comment trong mã của bạn)
                                          $(".chat-content-list").append(t("manager", "birthday"));
                                        var u = e.userZodiak[0].text,
                                            h = e.Replace(u, p);
                                        $(".chat-content-item.manager.text-birthday p").typed({
                                            strings: [h],
                                            showCursor: !1,
                                        callback: function () {
                                                var t = [{ text: e.Replace(e.socNumber[0].text, p) }];
                                                (l = $.merge(e.managerVariants[a][0][0], t)),
                                                    (l = $.merge(l, e.managerVariants[a][0][1])),
                                                    $.each(l, function (t, a) {
                                                        m.push(e.Replace(a.text, p));
                                                    }),
                                                    e.LoadListMessages(m, p.zodie);
                                            },
                                        });
                                    }
                                });
                            }
                        });
                }, 1e3);
            },
        });
}
    var n = document.querySelector(".country_action").innerHTML,
        o = document.querySelector(".new_price_val").innerHTML,
        r = document.querySelector(".new_price_cur").innerHTML;
    console.log(o),
        console.log(r),
        (e.randomIntFromInterval = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        }),
        (e.managerDialog = [
            {
                text:
                    "สวัสดีค่ะ! ฉัน <b style='color: rgb(134, 144, 254);'>หมอลักษณ์ ฟันธง</b>! มีวันที่ดี",
            },
            { text: "การคาดการณ์ของฉันสำหรับครึ่งหลังของปี 2569 ของฉันทำให้ คนไทย ทั้งประเทศอึ้งกันไปหมด: 3ราศี 🙏เฮงสุดๆเฮงยืน🙏จะเริ่มทำเงินได้มาก⭐️ในขณะที่ 2 ราศีจะเงินขาดมือ " },
            { text: "เมื่อฉันมองดูตัวเลือกของคุณ ฉันเห็นบางสิ่งบางอย่างที่อาจเปลี่ยนชีวิตคุณในอนาคตได้" },
            { text: "ตอบคำถาม 2 ข้อเพื่อรับคำทำนายฟรี" },
            { text: "คุณเป็นผู้ชายหรือผู้หญิง?", m: { text: "ชาย" }, w: { text: "หญิง" } },
            { text: "คุณเกิดเมื่อใด?" },
        ]),
         (e.userZodiak = [{ text: "ขอบคุณ! ตามดวง คุณคือ  <b style='color: #00a3ff'>{zodie}</b>" }]),
                (e.managerVariants = {
            w: [
                [
                    [
                        {text:"  เงิน<br><img width='250px' src='img/1.gif'> <br> สุขภาพ<br><img width='250px' src='img/2.gif'> <br> อาชีพ<br><img width='250px' src='img/3.gif'> <br> ความรัก <br><img width='250px' src='img/4.gif'> "},
                        {
                            text:
                                "ราศี \"<b style='color: #00a3ff'>{zodie}</b>\" จะมีการปฏิวัติทางการเงินในอนาคตอันใกล้นี้ คุณจะประสบกับการเปลี่ยนแปลงทางการเงินครั้งใหญ่ แต่มันขึ้นอยู่กับการตัดสินใจของคุณ คุณปฏิเสธตัวคุณเองในหลายสิ่งหลายอย่าง หนี้สินกำลังตามหลอกหลอนคุณ ตามดวงแล้ว คุณมักจะผลักเงินทองและโชคลาภออกไปจากชีวิตของคุณ",
                        },
                        { text: "ในอดีต ชีวิตของคุณเต็มไปด้วยเรื่องขึ้นๆ ลงๆ และมักมีโชคร้ายตามมา ทำให้ทุกอย่างที่คุณทำนั้นยากลำบากและไม่ประสบความสำเร็จ คุณเป็นคนฉลาดและขยันขันแข็ง แต่การทำงานและอาชีพของคุณมักจะไม่มั่นคง" },
                        { text: "คุณจะไม่สามารถออกไปจากสถานการณ์ที่ย่ำแย่นี้ได้ในปีที่จะมาถึงหากคุณไม่เลือกในสิ่งที่ถูกต้องซึ่งย่อมจะหมายถึงการปฏิวัติทางการเงินนั่นเอง" },
                        { text:"ภายในหนึ่งเดือน ชีวิตของคุณจะเปลี่ยนไปอย่างมาก หนี้ทั้งหมดของคุณจะหายไป เงินทองจะหลั่งไหลเข้ามาจากทุกทาง จะไม่มีความล้มเหลวทางการเงินเกิดขึ้นอีก แต่ขึ้นอยู่กับว่าคุณจะเชื่อผมหรือไม่" },
                        {text:"  <br><img width='250px' src='img/money.gif'> <br>"},  
                        { text: "หากคุณอยากจะเลิกยากจนในปี 2569 คุณจะต้องฟังในสิ่งที่ฉันกำลังจะบอกคุณให้ดี ฉันมั่นใจว่าราศีของคุณเป็นสัญญาณของโชคชะตาที่จะเปิดโอกาสให้คุณปลดหนี้ ปัญหาทางการเงิน และทุกปัญหาในชีวิต" },
                        {
                            text:
                                "ฉันมองเห็นได้อย่างชัดเจนว่า คุณจะมีโอกาสในการเปลี่ยนแปลงทิศทางที่กำหนดใน" +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()+1]) +
                                " นี่จะเป็นช่วงเวลาที่ดีในการเปลี่ยนแปลงชีวิตของคุณจากเคราะห์ร้ายให้เป็นโชคดีไปจนสิ้นอายุขัยของคุณ",
                        },
                        { text: "ไม่มีอะไรในชีวิตของคุณที่เกิดขึ้นโดยบังเอิญ ราศี \"<b style='color: #00a3ff'>{zodie}</b>\" มีความเปราะบางต่อพลังงานที่ไม่ดี คุณจะต้องปกป้องตัวคุณเองและดึงดูดโชคเรื่องเงินทองไปพร้อมกัน" },
                    ],
                    [
                        { text: "<b>วิธีดึงดูดเงินและโชคลาภสำหรับราศีของคุณในปี 2569?</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        { text: "นี่จะเป็นโอกาสสุดท้ายในการเปลี่ยนแปลงโชคชะตาของคุณในปี 2569 หากคุณพลาดเครื่องรางนี้ ชีวิตของคุณจะยังคงเป็นเหมือนเดิมต่อไป คุณคือคนที่ต้องตัดสินใจในเรื่องนี้เอง!" },
                        { text: "ฉันจะช่วยคุณในการดึงดูดเงินทองและโชคลาภให้เข้ามาหาราศีของคุณในปี 2569 หากคุณตกลง คุณจะลืมไปเลยว่า ความจนเป็นอย่างไร ฉันจะปลดปล่อยโชคลาภของคุณที่ถูกกักขังให้คุณเอง" },
                        { text: "ฉันจะสร้างเครื่องรางพิเศษสำหรับคุณ ฉันจะใส่พลังลงไปในเครื่องรางด้วยมนต์วิเศษซึ่งจะทำให้พลังงานด้านมืดของคุณหมดไป ความโชคร้ายและความล้มเหลวทั้งหมดจะหายไปจากชีวิตของคุณตลอดไป ผมเห็นรูปคุณสวมสร้อยข้อมือนี้ ผมเห็นคุณจะมีความสุข! หลายคนจะอิจฉาคุณ คุณจะมีชีวิตที่มีความสุขและร่ำรวยเงินทอง" },
{text: `
  <div style="display: flex; flex-direction: column; align-items: center;">
    <img width="200px" src="img/product.jpg" style="margin-bottom: 10px;">
  </div>
  <div style="text-align: center; margin-top: 10px;">
  สร้อยข้อมือหัวใจพระสูตร
  </div>
`},
                        { text: "ทำไมคุณถึงต้องมีเครื่องรางนี้?" },
                        { text: "เครื่องรางนี้จะเปลี่ยนแปลงชีวิตของคุณจากหน้ามือเป็นหลังมือภายในเวลาแค่เดือนเดียว หนี้สินทั้งหมดของคุณจะหมดไป เงินทองจะหลั่งไหลเข้ามาหาคุณจากช่องทางต่างๆ และคุณจะสามารถลืมความล้มเหลวทางการเงิน และจะมีเงินไปตลอดชีวิตที่เหลืออยู่ของคุณ"},
                        { text:"เครื่องรางนำโชคมาสู่ผู้สวมใส่ การงานราบรื่น ชื่อเสียง โชคลาภในการงาน....ไม่เพียงแต่เกิดจากความพยายามของตัวคุณเองเท่านั้น แต่ยังเกิดจากส่วนหนึ่งของความพยายามนั้นด้วย เมื่อคุณใช้เครื่องประดับนี้ จะช่วยเสริมโชคลาภของคุณ คุณสมบัติที่ทรงพลังจะช่วยเพิ่มเส้นทางสู่ชื่อเสียงและความมั่งคั่งของคุณ"},
                        { text:"เชื่อกันว่าสร้อยข้อมือสามารถช่วยเพิ่มพลังงานบวก ปกป้องและปรับสมดุลอารมณ์ของผู้สวมใส่ได้ แต่ละข้อจะสร้างพลังงานและนำโชคมาให้ และถือเป็นสัญลักษณ์ของความมั่งคั่งและโชคลาภ สร้อยข้อมือนำโชคคือสร้อยข้อมือที่เชื่อกันว่าจะนำโชคลาภและความสงบสุขมาสู่ผู้สวมใส่ ในหลายวัฒนธรรมและศาสนา สร้อยข้อมือนำโชคมักเป็นสิ่งของที่มีความสำคัญทางจิตวิญญาณและใช้เพื่อให้ผู้สวมใส่ปลอดภัยและป้องกันวิญญาณชั่วร้ายหรือโชคร้าย"},
                        {
                            text:
                                'ฉันพยายามช่วยเหลือผู้คนแก้ปัญหาอยู่เสมอ และฉันไม่เคยหากำไรจากการทำเช่นนั้น นั่นจึงเป็นเหตุผลที่จนกระทั่งถึงเดือน ' + ( new Date().getDate() + 1 ) + ' ' +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + ' คุณจะได้รับส่วนลด 50% สำหรับเครื่องราง ราคาสำหรับคุณจึงจะอยู่ที่ <b style="color:red">' +
                                '990' +
                                '</b> <b>' +
                                '฿' +
                                " เท่านั้น </b>",
                        },
                        {text: "คุณสามารถสั่งซื้อเครื่องรางได้ในตอนนี้เลย! แค่กรอกชื่อและหมายเลขโทรศัพท์ของคุณลงในแบบฟอร์ม และชีวิตของคุณจะเปลี่ยนแปลงไป ฉันสัญญากับคุณเลย!<br><br> "}
                    ],
                ],
            ],
            m: [
                [
                    [
                        { text:"  เงิน<br><img width='250px' src='img/1.gif'> <br> สุขภาพ<br><img width='250px' src='img/2.gif'> <br> อาชีพ<br><img width='250px' src='img/3.gif'> <br> ความรัก <br><img width='250px' src='img/4.gif'> "},
                        {
                            text:
                                "ราศี \"<b style='color: #00a3ff'>{zodie}</b>\" จะมีการปฏิวัติทางการเงินในอนาคตอันใกล้นี้ คุณจะประสบกับการเปลี่ยนแปลงทางการเงินครั้งใหญ่ แต่มันขึ้นอยู่กับการตัดสินใจของคุณ คุณปฏิเสธตัวคุณเองในหลายสิ่งหลายอย่าง หนี้สินกำลังตามหลอกหลอนคุณ ตามดวงแล้ว คุณมักจะผลักเงินทองและโชคลาภออกไปจากชีวิตของคุณ",
                        },
                        { text: "ในอดีต ชีวิตของคุณเต็มไปด้วยเรื่องขึ้นๆ ลงๆ และมักมีโชคร้ายตามมา ทำให้ทุกอย่างที่คุณทำนั้นยากลำบากและไม่ประสบความสำเร็จ คุณเป็นคนฉลาดและขยันขันแข็ง แต่การทำงานและอาชีพของคุณมักจะไม่มั่นคง" },
                        { text: "คุณจะไม่สามารถออกไปจากสถานการณ์ที่ย่ำแย่นี้ได้ในปีที่จะมาถึงหากคุณไม่เลือกในสิ่งที่ถูกต้องซึ่งย่อมจะหมายถึงการปฏิวัติทางการเงินนั่นเอง" },
                        { text:"ภายในหนึ่งเดือน ชีวิตของคุณจะเปลี่ยนไปอย่างมาก หนี้ทั้งหมดของคุณจะหายไป เงินทองจะหลั่งไหลเข้ามาจากทุกทาง จะไม่มีความล้มเหลวทางการเงินเกิดขึ้นอีก แต่ขึ้นอยู่กับว่าคุณจะเชื่อผมหรือไม่" },
                        {text:"  <br><img width='250px' src='img/money.gif'> <br>"},  
                        { text: "หากคุณอยากจะเลิกยากจนในปี 2569 คุณจะต้องฟังในสิ่งที่ฉันกำลังจะบอกคุณให้ดี ฉันมั่นใจว่าราศีของคุณเป็นสัญญาณของโชคชะตาที่จะเปิดโอกาสให้คุณปลดหนี้ ปัญหาทางการเงิน และทุกปัญหาในชีวิต" },
                        {
                            text:
                                "ฉันมองเห็นได้อย่างชัดเจนว่า คุณจะมีโอกาสในการเปลี่ยนแปลงทิศทางที่กำหนดใน" +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()+1]) +
                                " นี่จะเป็นช่วงเวลาที่ดีในการเปลี่ยนแปลงชีวิตของคุณจากเคราะห์ร้ายให้เป็นโชคดีไปจนสิ้นอายุขัยของคุณ",
                        },
                        { text: "ไม่มีอะไรในชีวิตของคุณที่เกิดขึ้นโดยบังเอิญ ราศี \"<b style='color: #00a3ff'>{zodie}</b>\" มีความเปราะบางต่อพลังงานที่ไม่ดี คุณจะต้องปกป้องตัวคุณเองและดึงดูดโชคเรื่องเงินทองไปพร้อมกัน" },
                    ],
                    [
                        { text: "<b>วิธีดึงดูดเงินและโชคลาภสำหรับราศีของคุณในปี 2569?</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        { text: "นี่จะเป็นโอกาสสุดท้ายในการเปลี่ยนแปลงโชคชะตาของคุณในปี 2569 หากคุณพลาดเครื่องรางนี้ ชีวิตของคุณจะยังคงเป็นเหมือนเดิมต่อไป คุณคือคนที่ต้องตัดสินใจในเรื่องนี้เอง!" },
                        { text: "ฉันจะช่วยคุณในการดึงดูดเงินทองและโชคลาภให้เข้ามาหาราศีของคุณในปี 2569 หากคุณตกลง คุณจะลืมไปเลยว่า ความจนเป็นอย่างไร ฉันจะปลดปล่อยโชคลาภของคุณที่ถูกกักขังให้คุณเอง" },
                        { text: "ฉันจะสร้างเครื่องรางพิเศษสำหรับคุณ ฉันจะใส่พลังลงไปในเครื่องรางด้วยมนต์วิเศษซึ่งจะทำให้พลังงานด้านมืดของคุณหมดไป ความโชคร้ายและความล้มเหลวทั้งหมดจะหายไปจากชีวิตของคุณตลอดไป ผมเห็นรูปคุณสวมสร้อยข้อมือนี้ ผมเห็นคุณจะมีความสุข! หลายคนจะอิจฉาคุณ คุณจะมีชีวิตที่มีความสุขและร่ำรวยเงินทอง" },
{text: `
  <div style="display: flex; flex-direction: column; align-items: center;">
    <img width="200px" src="img/product.jpg" style="margin-bottom: 10px;">
  </div>
  <div style="text-align: center; margin-top: 10px;">
กำไลพระสูตรหัวใจ เพียง
  </div>
`},
                        { text: "ทำไมคุณถึงต้องมีเครื่องรางนี้?" },
                        { text: "เครื่องรางนี้จะเปลี่ยนแปลงชีวิตของคุณจากหน้ามือเป็นหลังมือภายในเวลาแค่เดือนเดียว หนี้สินทั้งหมดของคุณจะหมดไป เงินทองจะหลั่งไหลเข้ามาหาคุณจากช่องทางต่างๆ และคุณจะสามารถลืมความล้มเหลวทางการเงิน และจะมีเงินไปตลอดชีวิตที่เหลืออยู่ของคุณ"},
                        { text:"เครื่องรางนำโชคมาสู่ผู้สวมใส่ การงานราบรื่น ชื่อเสียง โชคลาภในการงาน....ไม่เพียงแต่เกิดจากความพยายามของตัวคุณเองเท่านั้น แต่ยังเกิดจากส่วนหนึ่งของความพยายามนั้นด้วย เมื่อคุณใช้เครื่องประดับนี้ จะช่วยเสริมโชคลาภของคุณ คุณสมบัติที่ทรงพลังจะช่วยเพิ่มเส้นทางสู่ชื่อเสียงและความมั่งคั่งของคุณ"},
                        { text:"เชื่อกันว่าสร้อยข้อมือสามารถช่วยเพิ่มพลังงานบวก ปกป้องและปรับสมดุลอารมณ์ของผู้สวมใส่ได้ แต่ละข้อจะสร้างพลังงานและนำโชคมาให้ และถือเป็นสัญลักษณ์ของความมั่งคั่งและโชคลาภ สร้อยข้อมือนำโชคคือสร้อยข้อมือที่เชื่อกันว่าจะนำโชคลาภและความสงบสุขมาสู่ผู้สวมใส่ ในหลายวัฒนธรรมและศาสนา สร้อยข้อมือนำโชคมักเป็นสิ่งของที่มีความสำคัญทางจิตวิญญาณและใช้เพื่อให้ผู้สวมใส่ปลอดภัยและป้องกันวิญญาณชั่วร้ายหรือโชคร้าย"},
                        {
                            text:
                                'ฉันพยายามช่วยเหลือผู้คนแก้ปัญหาอยู่เสมอ และฉันไม่เคยหากำไรจากการทำเช่นนั้น นั่นจึงเป็นเหตุผลที่จนกระทั่งถึงเดือน ' + ( new Date().getDate() + 1 ) + ' ' +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + ' คุณจะได้รับส่วนลด 50% สำหรับเครื่องราง ราคาสำหรับคุณจึงจะอยู่ที่ <b style="color:red">' +
                                '990' +
                                '</b> <b>' +
                                '฿' +
                                " เท่านั้น </b>",
                        },
                        {text: "คุณสามารถสั่งซื้อเครื่องรางได้ในตอนนี้เลย! แค่กรอกชื่อและหมายเลขโทรศัพท์ของคุณลงในแบบฟอร์ม และชีวิตของคุณจะเปลี่ยนแปลงไป ฉันสัญญากับคุณเลย!<br><br> "}
                    ],
                ],
            ],
        }),
        (e.socNumber = [
            {
                text:
                    "เลขนำโชคของคุณคือ " + "9" + " ซึ่งหมายความว่าในวันที่ " + "9" + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()+1]) + " 2569 ชีวิตของคุณจะเปลี่ยนไปในทางที่ดีขึ้น"
            },
        ]),
        (e.Forms = function (t) {
            e.FormsParams = {
                method: "POST",
                action: "",
                inputs: [
                    { name: "name", value: "", placeholder: "Enter your name", type: "text", required: !0 },
                    { name: "phone", value: "", placeholder: "Enter your phone", type: "tel", required: !0 },
                ],
                btn_text: "Order amulet",
                title: "Order form amulet by Rudy Baldwin",
            };
            return function () {
                document.getElementById("cont_form").style.display = "block";
            };
        }),
         (e.getZodiak = function (t) {
            console.log('test', t);
            var a = parseInt(t[0]);
            switch (a) {
                case 2491: case 2503: case 2515: case 2527: case 2539: case 2551: case 2563:
                    e.zodiak = 1;
                    break;
                case 2492: case 2504: case 2516: case 2528: case 2540: case 2552: case 2564:
                    e.zodiak = 2;
                    break;
                case 2493: case 2505: case 2517: case 2529: case 2541: case 2553: case 2565:
                    e.zodiak = 3;
                    break;
                case 2494: case 2506: case 2518: case 2530: case 2542: case 2554:
                    e.zodiak = 4;
                    break;
                case 2495: case 2507: case 2519: case 2531: case 2543: case 2555:
                    e.zodiak = 5;
                    break;
                case 2496: case 2508: case 2520: case 2532: case 2544: case 2556:
                    e.zodiak = 6;
                    break;
                case 2497: case 2509: case 2521: case 2533: case 2545: case 2557:
                    e.zodiak = 7;
                    break;
                case 2498: case 2510: case 2522: case 2534: case 2546: case 2558:
                    e.zodiak = 8;
                    break;
                case 2499: case 2511: case 2523: case 2535: case 2547: case 2559:
                    e.zodiak = 9;
                    break;
                case 2500: case 2512: case 2524: case 2536: case 2548: case 2560:
                    e.zodiak = 10;
                    break;
                case 2501: case 2513: case 2525: case 2537: case 2549: case 2561:
                    e.zodiak = 11;
                    break;
                case 2502: case 2514: case 2526: case 2538: case 2550: case 2562:
                    e.zodiak = 12;
            }
            return e.zodiak;
        }),
        (e.ZodiakName = [
    { 
        name: "ปีชวด", 
        id: 1, 
        description: "ข้อดี: ฉลาด คล่องแคล่ว ปรับตัวได้ดี<br>ข้อเสีย: บางครั้งหงุดหงิดและขาดความอดทน<br>สีนำโชค: น้ำเงิน ทอง<br>คำแนะนำ: คุณควรเรียนรู้ที่จะควบคุมอารมณ์และอดทนให้มากขึ้น", 
        image: "img/zodiac/1.png" 
    },
    { 
        name: "ปีฉลู", 
        id: 2, 
        description: "จุดแข็ง: ขยัน อดทน เชื่อถือได้<br>ข้อเสีย: ดื้อรั้น ไม่ชอบการเปลี่ยนแปลง<br>สีนำโชค: เขียว แดง<br>คำแนะนำ: เปิดรับความคิดใหม่ๆ และการเปลี่ยนแปลง", 
        image: "img/zodiac/2.png" 
    },
    { 
        name: "ปีขาล",
        id: 3, 
        description: "จุดแข็ง: กล้าหาญ แข็งแกร่ง รักอิสระ<br>ข้อเสีย: หงุดหงิด ใจร้อน<br>สีนำโชค: ดำ ขาว<br>คำแนะนำ: คุณควรเรียนรู้ที่จะควบคุมอารมณ์และคิดให้รอบคอบก่อนกระทำการ", 
        image: "img/zodiac/3.png" 
    },
    { 
        name: "ปีเถาะ", 
        id: 4, 
        description: "จุดแข็ง: อ่อนโยน ละเอียดอ่อน มีไหวพริบ<br>จุดอ่อน: ประหม่าง่าย ตัดสินใจช้า<br>สีนำโชค: ชมพู เหลือง<br>คำแนะนำ: เพิ่มความกล้าหาญและความมั่นใจในตัวเอง", 
        image: "img/zodiac/4.png" 
    },
    { 
        name: "ปีมะโรง", 
        id: 5, 
        description: "จุดแข็ง: มีความคิดสร้างสรรค์ มั่นใจ มีความทะเยอทะยาน<br>จุดอ่อน: เหนื่อยล้าง่าย ค่อนข้างหยิ่งยโส<br>สีนำโชค: ม่วง เงิน<br>คำแนะนำ: คุณควรเรียนรู้ที่จะสร้างสมดุลให้กับชีวิตและลดความหยิ่งยโสลง", 
        image: "img/zodiac/5.png" 
    },
    { 
        name: "ปีมะเส็ง", 
        id: 6, 
        description: "จุดแข็ง: ฉลาด เฉียบแหลม ลึกลับ<br>จุดอ่อน: ชอบอยู่คนเดียว ไม่ค่อยไว้ใจคนอื่น<br>สีนำโชค: แดง ดำ<br>คำแนะนำ: เปิดใจยอมรับคนรอบข้างมากขึ้น", 
        image: "img/zodiac/6.png" 
    },
    { 
        name: "ปีมะเมีย", 
        id: 7, 
        description: "จุดแข็ง: กระตือรือร้น รักอิสระ ชอบผจญภัย <br>จุดอ่อน: ขาดความสม่ำเสมอ ไม่ชอบการผูกมัด <br>สีนำโชค: สีส้ม สีเขียว <br>คำแนะนำ: เรียนรู้ที่จะมีสมาธิและมีเป้าหมายที่ชัดเจน", 
        image: "img/zodiac/7.png" 
    },
    { 
        name: "ปีมะแม", 
        id: 8, 
        description: "จุดแข็ง: อ่อนโยน มีความคิดสร้างสรรค์ มีอารมณ์ดี<br>จุดอ่อน: ได้รับอิทธิพลได้ง่าย ตัดสินใจยาก<br>สีนำโชค: เหลือง ขาว<br>คำแนะนำ: เพิ่มความแข็งแกร่งทางจิตใจและความเป็นอิสระ", 
        image: "img/zodiac/8.png" 
    },
    { 
        name: "ปีวอก", 
        id: 9, 
        description: "จุดแข็ง: ฉลาด ปรับตัวเก่ง มีความสุข<br>จุดอ่อน: ขาดความสม่ำเสมอ บางครั้งไม่จริงจัง<br>สีนำโชค: น้ำเงิน ทอง<br>คำแนะนำ: เรียนรู้ที่จะมีวินัยและมีสมาธิ", 
        image: "img/zodiac/9.png" 
    },
    { 
        name: "ปีระกา", 
        id: 10, 
        description: "จุดแข็ง: ขยันขันแข็ง ใส่ใจ น่าเชื่อถือ<br>จุดอ่อน: เป็นคนละเอียดรอบคอบ ดื้อรั้นในบางครั้ง<br>สีนำโชค: แดง ม่วง<br>คำแนะนำ: ควรผ่อนคลายและยอมรับความไม่สมบูรณ์แบบ", 
        image: "img/zodiac/10.png" 
    },
    { 
        name: "ปีจอ", 
        id: 11, 
        description: "จุดแข็ง: ซื่อสัตย์ ยุติธรรม ปกป้องคนที่ตนรัก<br>จุดอ่อน: บางครั้งไม่ยืดหยุ่น โกรธง่าย<br>สีนำโชค: สีดำ สีเขียว<br>คำแนะนำ: คุณควรเรียนรู้ที่จะผ่อนคลายและรับฟังความคิดเห็นของผู้อื่น", 
        image: "img/zodiac/11.png" 
    },
    { 
        name: "ปีกุน", 
        id: 12, 
        description: "จุดแข็ง: ซื่อสัตย์ ใจดี ใจกว้าง<br>จุดอ่อน: เชื่อคนง่าย ไว้ใจคนอื่นได้ง่าย<br>สีนำโชค: เหลือง ส้ม<br>คำแนะนำ: ระมัดระวังในการไว้ใจคนอื่นและเรียนรู้ที่จะปกป้องตัวเอง", 
        image: "img/zodiac/12.png" 
    }
]),
        (e.DateBirthday = [{ day: [1, 31], month: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], year: [2491, 2565] }]),
        (e.MonthVariantType = ["january", "fabruary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]),
        (e.MonthVariant = {
            january: ["январь", "января", "январе"],
            fabruary: ["февраль", "февраля", "феврале"],
            march: ["март", "марта", "марте"],
            april: ["апрель", "апреля", "апреле"],
            may: ["май", "мая", "мае"],
            june: ["июнь", "июня", "июне"],
            july: ["июль", "июля", "июле"],
            august: ["август", "августа", "августе"],
            september: ["сентябрь", "сентября", "сентябре"],
            october: ["октябрь", "октября", "октебре"],
            november: ["ноябрь", "ноября", "ноябре"],
            december: ["декабрь", "декабря", "декабре"],
        }),
        (e.Scroll = function () {
            var t = $(".chat-content-container .chat-content-list");
            if (!t.length) return;
            // Chỉ tạo một watcher duy nhất cho cả phiên, thay vì mỗi lần gọi Scroll() lại setInterval mới
            if (!e.ScrollWatcher) {
                var a = -1,
                    n = -1;
                e.ScrollWatcher = setInterval(function () {
                    var o = t.height(),
                        i = t.width();
                    (o == a && i == n) || ((a = o), (n = i), t.parent().stop(!0).animate({ scrollTop: o }, 50));
                }, 100);
            }
            t.parent().stop(!0).animate({ scrollTop: t.height() }, 50);
        }),
        (e.Replace = function (e, t) {
            var a = e;
            return (
                Object.entries(t).forEach((e) => {
                    var t = "{" + e[0] + "}",
                        n = new RegExp(t, "g");
                    a = a.replace(n, e[1]);
                }),
                a
            );
        }),
        (e.LoadListMessages = function (a, n) {
            var o,
                i = 1,
                r = 1,
                c = {
                    showCursor: !1,
                };
            for (o = a.length; i < o + 1; i++)
                (c.onStringTyped = function () {
                    ++r < o + 1 && ((c.array_id = r), (c.strings = [a[r - 1]]), $(".chat-content-list").append(t("manager", r)), $(".chat-content-item.manager p.p" + r).typed(c), e.Scroll()),
                        r == o + 1 &&
                        setTimeout(function () {
                            $(".chat-content-list").append(e.Forms(n)), e.Scroll();
                        }, 1500); // 1500
                }),
                    1 == i && ((c.array_id = i), (c.strings = [a[i - 1]]), $(".chat-content-list").append(t("manager", i)), $(".chat-content-item.manager p.p" + i).typed(c), e.Scroll());
        }),
        $(window).on("load", function () {
            $(".chat-content-list").append(employeeBox);
            $(".chat-content-list").append(t("manager")),
                e.Scroll(),
                $(".chat-content-item.manager:last p").typed({
                    strings: [e.managerDialog[0].text],
                    showCursor: !1,
                    typeSpeed: 35,
                    callback: function () {
                        setTimeout(() => {
                            // tin nhắn 2
                            $(".chat-content-list").append(t("manager")),
                                e.Scroll(),
                                $(".chat-content-item.manager:last p").typed({
                                    strings: [e.managerDialog[1].text],
                                    showCursor: !1,
                                    typeSpeed: 35,
                                    callback: function () {
                                        setTimeout(function () {
                                            // tin nhắn 3
                                            $(".chat-content-list").append(t("manager")),
                                                e.Scroll(),
                                                $(".chat-content-item.manager:last p").typed({
                                                    strings: [e.managerDialog[2].text],
                                                    showCursor: !1,
                                                    typeSpeed: 35,
                                                    callback: function () {
                                                        setTimeout(function () {
                                                            // tin nhắn 4
                                                            $(".chat-content-list").append(t("manager")),
                                                                e.Scroll(),
                                                                $(".chat-content-item.manager:last p").typed({
                                                                    strings: [e.managerDialog[3].text],
                                                                    showCursor: !1,
                                                                    typeSpeed: 35,
                                                                    callback: function () {
                                                                        setTimeout(function () {
                                                                            setTimeout(function () {
                                                                                $(".chat-content-list").append(t("manager")),
                                                                                    e.Scroll(),
                                                                                    $(".chat-content-item.manager:last p").typed({
                                                                                        strings: [e.managerDialog[4].text],
                                                                                        showCursor: !1,
                                                                                        callback: function () {
                                                                                            setTimeout(function () {
                                                                                                var t;
                                                                                                e.Scroll(),
                                                                                                    $('.chat-content-list').append(genderTop);
                                                                                                $(".chat-content-list").append(
                                                                                                    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                                                                                                    (t = e.managerDialog[4]).m.text +
                                                                                                    '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                                                                                                    t.w.text +
                                                                                                    "</span></div></div>"
                                                                                                ),
                                                                                                    e.Scroll(),
                                                                                                    $(".chooseGender").on("click", function () {
                                                                                                        a($(this).data("type"));
                                                                                                    });
                                                                                            }, 100);
                                                                                        },
                                                                                    });
                                                                            }, 100);
                                                                        }, 100);
                                                                    },
                                                                });
                                                        }, 100);
                                                    },
                                                });
                                        }, 100);
                                    }
                                });
                        }, 100);
                    },
                });
        });
});
