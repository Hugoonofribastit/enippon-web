"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "es" | "en";

export default function TermsPage() {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ENIPPON TOURS" width={40} height={40} className="h-8 w-auto" />
            <span className="font-bold text-lg">ENIPPON TOURS</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="px-3 py-1.5 rounded-full text-xs font-bold border-2 border-[#c41e3a] text-[#c41e3a] hover:bg-[#c41e3a] hover:text-white transition-all"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-[#c41e3a] transition-colors">
              {lang === "es" ? "← Volver al inicio" : "← Back to home"}
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          {lang === "es" ? "Términos y Condiciones" : "Terms & Conditions"}
        </h1>

        {lang === "en" ? (
          <div className="prose prose-gray max-w-none">
            {/* GENERAL CONDITIONS OF USE */}
            <h2>GENERAL CONDITIONS OF USE</h2>
            <p>This website is the property of ENIPPON Co.,Ltd., with registered office in Jingumae, Shibuya-ku, Tokyo, 150-0001 – JAPAN.</p>
            <h3>Background information</h3>
            <p>ENIPPON Co., Ltd., the company responsible for the website www.enippontours.com, specializes in organizing tours or tourist activities in various regions of Japan, aimed at Clients interested in these services. Through its platform www.enippontours.com, ENIPPON Co., Ltd. offers any natural or legal person (hereinafter, the &quot;Client&quot;) the opportunity to book tourist activities and tours.</p>

            <h3>1.- ACCEPTANCE OF THE GENERAL CONDITIONS OF USE AND ACCESS TO THE WEBSITE</h3>
            <p>By accessing, viewing or using the materials, content or services available on the Website, the Client accepts and acknowledges that he/she has understood and accepted these General Conditions of Use, which regulate the rights and obligations between ENIPPON Co., Ltd. and the Client for the contracting of tour services or tourist activities.</p>
            <p>These are the only General Conditions of Use applicable to the use of the Website (without prejudice to the existence of specific conditions for certain services) and to the contracting of the services, replacing any other prior condition, unless there is an express written agreement between ENIPPON Co., Ltd. and the Client.</p>
            <p>Registration is not required to access the Website; however, in order to contract the services offered by ENIPPON Co., Ltd., the Client will need to register and accept these conditions before proceeding with payment.</p>

            <h3>2.- PURPOSE OF THE WEBSITE</h3>
            <p>ENIPPON Co., Ltd. has created this Website to provide Customers with a reservation service for tours or tourist activities in different areas of Japan.</p>

            <h3>3.- RESERVATIONS AT ENIPPON Co., Ltd. AND REGISTRATION ON THE WEBSITE</h3>
            <p>To make reservations through the Website, the Client must provide his/her personal data (name, surname, email, telephone number and cell phone number), or, where applicable, the data of the person for whom the reservation is being made, so that ENIPPON Co., Ltd. can process the request.</p>
            <p>Clients undertake to provide true, accurate and up-to-date information about their identity or that of the person for whom the tour or tourist activity is booked. They are responsible for the veracity of the data provided and for any consequences arising from errors in the information.</p>

            <h3>4.- SPECIFIC CONDITIONS REGARDING THE RESERVATION OF TOURS OR TOURIST ACTIVITIES</h3>
            <p>Reservations made by each Client through the Website are subject to specific conditions applicable to each tour or tourist activity, which can be found in the description of each service on the Website, as well as in the confirmation email sent by ENIPPON Co., Ltd. after the reservation.</p>
            <h4>4.1.- General conditions applicable to all reservations.</h4>
            <p>Generally, the reservation of tours or tourist activities offered by ENIPPON Co., Ltd. is subject to the following conditions:</p>
            <p>Customers may modify their reservations provided that the conditions of the tour or tourist activity allow it. To make modifications, the Customer may send a request for change by email, in response to the reservation confirmation email.</p>
            <p>The minimum advance notice period for each reservation varies depending on the tour or tourist activity. This detail can be found in the corresponding description on the Website. ENIPPON Co., Ltd. informs that it is not possible to book a tour or tourist activity with less advance notice than indicated.</p>
            <h4>4.2.- Specific conditions related to the information of the tour or tourist activity booked.</h4>
            <p>The meeting point, date, time, duration and all the information necessary to enjoy the tour or tourist activity are detailed in the description of each service on the Website, as well as in the confirmation email sent by ENIPPON Co., Ltd. after booking.</p>
            <p>It is essential that Clients are punctual and present themselves at the meeting point at the time and date indicated in their reservation, since all tours or tourist activities are scheduled to depart at a specific time and the start time cannot be modified.</p>
            <p>The client has a maximum of twenty (20) minutes of tolerance to join at the beginning of the tour. This tolerance time will not be recovered nor will it extend the total duration of the service at the end of the tour.</p>
            <p>The duration of the published tours or tourist activities is for reference only and may vary depending on the development of the service or due to factors external to ENIPPON Co., Ltd., such as weather conditions, traffic problems, strikes, etc.</p>

            <h3>5.- SPECIFIC CONDITIONS FOR RESERVATIONS</h3>
            <p>Clients should take into account the following aspects:</p>
            <ul>
              <li><strong>Modification of the meeting point:</strong> The Client may change the meeting point provided that the conditions of the service allow it. To do so, he/she may send a request for change by email, in response to the booking confirmation email.</li>
              <li><strong>Contacting the organizer:</strong> In the booking confirmation email, ENIPPON Co., Ltd. will provide the organizer&apos;s name, email and emergency number, in case the Customer cannot reach the organizer or faces any problems.</li>
              <li><strong>Stops along the way:</strong> If Customers need to make a stop along the way (for example, if they are staying in different hotels), this may incur an additional charge, which will depend on the city in which they are located.</li>
              <li><strong>Destination location:</strong> If the destination address is outside the central area of the city, the transfer with the organizer will incur an additional charge, which will be the responsibility of the Client.</li>
              <li><strong>Modifications to the agreed route:</strong> If the Client wishes to make changes to the agreed routes, there may be additional charges, which will be the Client&apos;s responsibility.</li>
            </ul>

            <h3>6.- ECONOMIC CONDITIONS OF HIRING</h3>
            <p>The formalization of the reservation of ENIPPON Co., Ltd. services will be considered completed once the Clients have filled out and accepted the reservation form, and the reservation has been confirmed after correctly completing the process and the corresponding payment.</p>
            <p>Prices will be as quoted by ENIPPON Co., Ltd. at the time of booking. All services are instant confirmation and payment is made at the time of booking via credit or debit card (Visa or Mastercard) or Square. ENIPPON Co., Ltd. typically collects the full amount via the payment gateway assigned by email at the time of booking.</p>
            <p>Prices are expressed in Japanese yen (JPY/¥), including taxes. If the Customer wishes to know the price in another currency, he/she can request it through the contact page of the website, and the total amount will be indicated in the service confirmation.</p>
            <p>In general, ENIPPON Co., Ltd. does not apply discounts unless specified in the conditions of the corresponding tour or tourist activity.</p>
            <p>After booking, Customers will receive an email confirming the payment for the service and providing a receipt. It is important that the receipt is not equivalent to the invoice for the contracted services, which can be requested once the reservation has been made on the Website.</p>
            <p>Website documentation related to the contracted services. The information necessary to carry out the tour or tourist activity will be sent by email. In case of cancellation as indicated in section 7 of these General Conditions of Use, ENIPPON Co., Ltd. will issue the corresponding corrective documentation.</p>
            <p>ENIPPON Co., Ltd. will issue an invoice for the provision of services in accordance with current regulations.</p>
            <p>Any improper or fraudulent charges to the card used for the purchase must be notified to ENIPPON Co., Ltd. via www.enippontours.com/contacto as soon as possible so that the company can take the necessary actions.</p>
            <p>Activities booked through actions or transactions that are suspected of fraud may be cancelled by ENIPPON Co., Ltd.</p>

            <h3>7.- CUSTOMER WITHDRAWAL, ASSIGNMENTS AND CANCELLATIONS OF TOURS OR TOURIST ACTIVITIES</h3>
            <p>At any time, the Client may withdraw from the tours or tourist activities requested or contracted, having the right to a refund of the amounts paid, either the total price or an advance payment, as established, and must compensate ENIPPON Co., Ltd. for the concepts detailed below:</p>
            <p>For individual and group tours or tourist activity services, all management fees, payment commissions, and any incurred cancellation costs shall apply.</p>
            <p>In the event of withdrawal:</p>
            <ul>
              <li>Cancellations made more than 15 days in advance of the tour: a 100% refund shall be issued, deducting administrative fees and commissions corresponding to banks, credit/debit cards, virtual wallets, platforms, and payment gateways.</li>
              <li>Cancellations made between 7 and 14 days in advance of the tour: a 50% refund shall be issued, deducting administrative fees and commissions corresponding to banks, credit/debit cards, virtual wallets, platforms, and payment gateways.</li>
              <li>Cancellations made between 1 and 6 days in advance of the tour: no refund shall be issued.</li>
              <li>Cancellations on the day of the tour or no-shows: no refund shall be issued.</li>
            </ul>
            <p><strong>Transfer of reservation to third parties:</strong> The Client may transfer his/her reservation for a tour or tourist activity to a third party, provided that he/she requests this in writing at least fifteen days before the start date, unless both parties agree to a shorter period.</p>
            <p>The assignee must comply with the same requirements demanded of the assignor and both will be jointly liable to ENIPPON Co., Ltd. for the payment of the price and any additional charges justified by the assignment.</p>

            <h3>8.- ALTERATIONS</h3>
            <p>ENIPPON Co., Ltd. undertakes to provide its Clients with all the services contracted in the offer that gave rise to the tour or tourist activity contract, with the stipulated conditions and characteristics, in accordance with the following points:</p>
            <p><strong>Modification before the start of the tour or tourist activity:</strong> If, before the start date, ENIPPON Co., Ltd. must significantly modify any essential element of the contract, including the price, it must immediately inform the Client, either directly or, when acting through an intermediary, through said intermediary.</p>
            <p><strong>Customer&apos;s options in the event of modifications:</strong> In this case, unless otherwise agreed between the parties, the Customer may choose to cancel the contract without penalty or accept the proposed modifications, which will include a description of the changes and their impact on the price. The Customer must communicate its decision to ENIPPON Co., Ltd. (or the organizer, as applicable) within 24 hours of being notified of the modification.</p>
            <p>If the Client does not communicate his decision within the indicated period, it will be understood that he has chosen to cancel the contract without any penalty.</p>
            <p><strong>Cancellation by ENIPPON Co., Ltd. or Client:</strong> If the Client chooses to cancel the contract based on the previous section or if ENIPPON Co., Ltd. cancels the tour or tourist activity before the agreed date for reasons beyond the Client&apos;s control, the Client shall have the right to:</p>
            <ul>
              <li>Receive a full refund of all amounts paid.</li>
              <li>Participate in another tour or tourist activity of equivalent or superior quality, provided that ENIPPON Co., Ltd. can offer it. If the alternative service is of inferior quality, ENIPPON Co., Ltd. must refund the difference in price. This right also applies if the Client does not receive information about the reservation in the stipulated terms.</li>
            </ul>
            <p><strong>Limitation of Liability and Compensation:</strong> ENIPPON Co., Ltd. shall not be liable to compensate the Client in the event of breach of contract, cancellation of the tour or tourist activity due to force majeure or circumstances beyond its control. These include, but are not limited to, extreme weather conditions, natural disasters, war conflicts, public health emergencies, strikes, government restrictions, circumstances beyond the control of the person claiming them, abnormal and unforeseeable, the consequences of which could not have been avoided even with diligence, or other abnormal and unforeseeable situations that prevent the performance of the contracted services. ENIPPON Co., Ltd. undertakes to inform the Client of such situations to the extent possible and as far in advance as possible, but shall not assume any liability for any inconvenience or loss that may arise from these circumstances.</p>
            <p><strong>Changes after the start of the tour or tourist activity:</strong> If, after the start of the tour or tourist activity, the organizer does not provide a significant part of the contracted services, he will take appropriate measures for the continuation of the activity at no additional charge. If the Client agrees to continue with the solutions offered, he will be deemed to have accepted these changes.</p>
            <p><strong>Refund clause in case of organizer&apos;s incapacity:</strong> In the event that the organizer assigned to the tour or tourist activity suffers a serious problem that prevents him from continuing to provide the service, ENIPPON Co., Ltd. undertakes to reimburse the Client only the amount corresponding to the hours not fulfilled as stipulated in the contract. This refund will be calculated on the basis of the agreed price for the tour or tourist activity, and will be made within 3 to 5 business days after notification of the incident.</p>
            <p><strong>Diligence in case of complaint:</strong> In case of complaint, ENIPPON Co., Ltd. shall act diligently to find appropriate solutions.</p>
            <p><strong>Services not included in the contract:</strong> ENIPPON Co., Ltd. shall not be liable for any additional services not expressly included in the tour or tourist activity contract. This includes, but is not limited to, transportation from the Client&apos;s place of origin to the starting point of the tour or tourist activity, as well as any transportation service during or after the activity. Likewise, ENIPPON Co., Ltd. shall not assume liability for reservations made before, during or after the tour or tourist activity. There shall be no obligation to compensate in the event of cancellation of the activity for the reasons provided for in section 5.</p>
            <p><strong>Acceptance of conditions:</strong> By accepting these general conditions, the Client declares to have read and accepted this cancellation policy, and expresses his/her agreement with the cancellation conditions applicable to tours or tourist activities booked through the website.</p>

            <h3>9.- CONDUCT ON THE WEBSITE</h3>
            <p>Clients undertake to use the website www.enippontours.com in a lawful, responsible manner and in compliance with Japanese law, specifically in accordance with the Personal Information Protection Act (Act No. 57 of 2003, also known as APPI, as amended in 2020) and other applicable regulations, respecting the principles of good faith and diligence. In particular, Clients undertake to:</p>
            <ul>
              <li>Do not provide false, inaccurate or incomplete information or impersonate other persons or entities.</li>
              <li>Not to use the website for fraudulent purposes, illegal activities, or in connection with such activities. This includes any actions prohibited under the Japanese Penal Code (Act No. 45 of 1907).</li>
              <li>Not to introduce, send or spread computer viruses or other harmful components that may alter, interrupt or compromise the integrity of the website and its systems, in compliance with the Law on the Prohibition of Unauthorized Access (Law No. 128 of 1999) and the Law on the Prevention of Damage to Computer Systems.</li>
              <li>Do not access or attempt to access content that is illegal, offensive, or infringes copyright or other rights protected under Japanese laws, as provided for in the Copyright Act of Japan (Act No. 48 of 1970, as amended in 2021).</li>
              <li>Do not download, send or distribute content that violates current legislation or the rights of third parties, in accordance with the Personal Information Protection Act (APPI) and the provisions of the Electronic Commerce Act (Act No. 29 of 2000).</li>
            </ul>
            <p>ENIPPON Co., Ltd. reserves the right to deny or restrict access to the website if it detects any inappropriate use or behavior that violates the conditions set forth in this clause, as permitted by Japanese law.</p>

            <h3>10.- REVIEWS, OPINIONS AND COMMENTS ON THE WEBSITE</h3>
            <p>Customers who have booked tours or tourist activities through ENIPPON Co., Ltd. may post their reviews, opinions and comments on the website in accordance with applicable regulations in Japan, including the Personal Information Protection Act (Act No. 57 of 2003, APPI) and the Japanese Penal Code (Act No. 45 of 1907).</p>
            <p>ENIPPON Co., Ltd. will send an email to the Client once the tour or tourist activity has concluded, in order for the Client to evaluate the experience and the service received. Once ENIPPON Co., Ltd. receives the Client&apos;s opinion and evaluation, it will proceed to review it and publish it on the website as soon as possible, in accordance with the applicable legal provisions.</p>
            <p>ENIPPON Co., Ltd. will publish Customer Reviews provided that the content is not illegal, obscene, abusive, threatening, defamatory, invasive of another&apos;s privacy, or otherwise objectionable or inappropriate. Furthermore, Reviews that include advertisements, links to other websites, or that do not correspond to the service being reviewed will not be permitted, in accordance with the Electronic Commerce Law (Law No. 29 of 2000).</p>
            <p>ENIPPON Co., Ltd. specifically reserves the right not to publish any opinions containing the following statements:</p>
            <ul>
              <li><strong>Discriminatory expressions:</strong> Expressions that attack a person and infringe on his or her right to honor, personal and family privacy, self-image, and human dignity are prohibited in accordance with the Japanese Penal Code (Act No. 45 of 1907). Discriminatory publications based on race, gender, religion, opinion, nationality, disability, or other personal or social circumstances are not acceptable.</li>
              <li><strong>Illegal Activities:</strong> Content that promotes illegal activities or contains obscene or defamatory material will not be permitted, in accordance with the Law on the Prevention of Damage to Computer Systems and the Law on the Prohibition of Unauthorized Access (Law No. 128 of 1999).</li>
              <li><strong>Violence:</strong> Expressions that promote violence, including sexual violence or violence against animals and people, are strictly prohibited under the Japanese Penal Code.</li>
              <li><strong>Degrading content:</strong> Comments or opinions that are threatening, intimidating, or promote violence toward specific individuals or groups will not be accepted in accordance with Japanese laws protecting against discrimination and harassment.</li>
            </ul>
            <p><strong>Communications between ENIPPON Co., Ltd. and Customers:</strong> Communications between ENIPPON Co., Ltd. and Clients will be conducted in writing via email. Communications addressed to ENIPPON Co., Ltd. should be sent to info@enippontours.com. Communications to Clients will be conducted using the email address provided at the time of registration, in line with the provisions of the Personal Information Protection Act (APPI, Act No. 57 of 2003).</p>

            <h3>11.- EXCLUSION OF LIABILITY</h3>
            <p>Without prejudice to the liability for tour services or tourism activities applicable under the General Customer Law and in accordance with the laws in force in Japan, specifically the Personal Information Protection Act (Act No. 57 of 2003, APPI) and other regulations mentioned above, ENIPPON Co., Ltd. shall not be liable for the following circumstances, but not limited to:</p>
            <ul>
              <li>Late cancellations by Customers. ENIPPON Co., Ltd. will not be liable for the refund of amounts paid if Customers do not comply with the cancellation deadline stipulated in the policy applicable to each service.</li>
              <li>Delays or errors made by Clients in arriving at the meeting point of the booked tour or activity. ENIPPON Co., Ltd. will not assume any responsibility if the Client misses the tour or activity due to lack of punctuality or failure to show up at the corresponding place.</li>
              <li>Damages and thefts suffered by Clients and their property during the tour or contracted activity, in accordance with the provisions of the Japanese Civil Code (Law No. 89 of 1896) regarding the Client&apos;s responsibility regarding their belongings.</li>
              <li>Injuries, damages and accidents that the Client may suffer during the tour or that, having suffered them previously, prevent him/her from enjoying the contracted service.</li>
              <li>Errors in the information provided by the Client regarding times or meeting points. ENIPPON Co., Ltd. shall not be liable if the organizer fails to arrive at the meeting point due to incorrect information provided by the Client.</li>
              <li>Missed flights, trains, buses or other means of transport. The Client is responsible for arranging his/her time and requesting transfer services in good time.</li>
              <li>Weather conditions in which the booked tour or tourist activity is carried out. ENIPPON Co., Ltd. shall not be liable for weather conditions; the service shall be deemed to have been properly provided.</li>
              <li>Quality and suitability of the service contracted by the Client. Responsibility for the Client&apos;s satisfaction is limited to the delivery of the service as contracted.</li>
              <li>Variable duration of tours or tourist activities. If the tour has covered all the planned points of interest, but the duration has varied slightly due to factors external to ENIPPON Co., Ltd., the service will be considered as fulfilled.</li>
            </ul>
            <h4>Disclaimer of Liability for Access or Use of the Website</h4>
            <p>ENIPPON Co., Ltd. does not provide any warranty and is not liable for any damages of any kind that may arise from access to or use of the content of the website, in accordance with the Electronic Commerce Act (Act No. 29 of 2000) and the Japanese Penal Code (Act No. 45 of 1907) in the following cases:</p>
            <ul>
              <li>Lack of availability, maintenance and correct operation of the website and/or its services or contents, in accordance with the Law on the Prohibition of Unauthorized Access (Law No. 128 of 1999).</li>
              <li>Technical failures attributable to third parties or causes of force majeure that prevent the correct functioning of the website.</li>
              <li>Cases of force majeure, such as failures in the Internet network, actions or omissions of third parties, or any other cause beyond the control of ENIPPON Co., Ltd. that affects the normal use of the website.</li>
              <li>Illegal, negligent or fraudulent use of the website contrary to these conditions and good faith, in accordance with the Japanese Penal Code (Act No. 45 of 1907).</li>
            </ul>
            <p>ENIPPON Co., Ltd. reserves the right to take any legal action it deems appropriate against Customers in the event of non-compliance with these General Conditions of Use, in accordance with the laws in force in Japan.</p>

            <h3>12.- INTELLECTUAL PROPERTY</h3>
            <h4>12.1 Intellectual and Industrial Property relating to the Website owned by ENIPPON Co., Ltd.</h4>
            <p>All rights to the content, design and source code of this Website, and in particular, the rights to the photographs, images, texts, logos, designs, trademarks, trade names and data included on the Website are the property of ENIPPON Co., Ltd. or of third parties who have expressly authorized ENIPPON Co., Ltd. to use them. These rights are protected by the Japanese Copyright Law (Act No. 48 of 1970) and the Japanese Trademark Law (Act No. 127 of 1959), which provide for exclusive rights over creative works and distinctive signs.</p>
            <p>ENIPPON Co., Ltd. does not grant any license or authorization of use of its intellectual and industrial property rights. In no case shall it be understood that the Client&apos;s access and navigation implies a waiver, transmission, license or total or partial transfer of said rights. Any unauthorized use of these contents by the Client will be considered a serious infringement of intellectual and industrial property rights, in accordance with the Japanese Copyright Law and the Japanese Trademark Law.</p>
            <h4>12.2 Intellectual Property relating to Customer Opinions published on the Website</h4>
            <p>By posting reviews on the Website, Customers grant ENIPPON Co., Ltd. a universal, unrestricted and free license to use, distribute, publicly communicate, adapt and reproduce such reviews, in accordance with the Copyright Law of Japan (Law No. 48 of 1970). This license allows ENIPPON Co., Ltd. to transform and adapt Customers&apos; reviews for advertising and promotional purposes on its websites and social media.</p>

            <h3>13.- MODIFICATIONS</h3>
            <p>ENIPPON Co., Ltd. reserves the right to make changes to these General Terms of Use, giving prior notice to Customers. These changes will be valid from their publication on the Website, in accordance with the Electronic Commerce Law (Law No. 29 of 2000), which establishes the validity of electronic notification for contractual changes.</p>

            <h3>14.- SAFEGUARD CLAUSE</h3>
            <p>Each clause of these General Terms of Use shall be interpreted independently and autonomously, so that if any of them were declared void by a final court judgment or arbitration decision, the rest of the stipulations shall remain valid. Any affected clause shall be replaced by another that retains the intended effects, in accordance with the Japanese Civil Code (Act No. 89 of 1896), which establishes guidelines for the interpretation and modification of contracts.</p>

            <h3>15.- JURISDICTION AND APPLICABLE LEGISLATION</h3>
            <p>These General Terms of Use shall be governed by Japanese law. In the event of a dispute concerning the interpretation, execution or validity of these General Terms of Use, the competent courts shall be the Courts of the Client, in accordance with the Japanese Code of Civil Procedure (Act No. 109 of 1996), which determines jurisdiction in contractual cases.</p>
            <p>ENIPPON Co., Ltd. informs Customers that it has a Complaint Form through which they may submit complaints or claims in relation to the services, in accordance with the Consumer Protection Law (Law No. 78 of 1970), which establishes the right to information and complaints for consumers in Japan.</p>

            <hr />

            {/* PRIVACY AND DATA PROTECTION POLICY */}
            <h2>PRIVACY AND DATA PROTECTION POLICY</h2>

            <h3>1.- Presentation and right to information</h3>
            <p>This website is owned by ENIPPON Co., Ltd., with registered office in Jingumae, Shibuya-ku, Tokyo, Japan.</p>
            <p>ENIPPON Co., Ltd. is committed to protecting the privacy and personal data of its Customers by complying with all applicable provisions of the Japanese Personal Information Protection Act (APPI). This data protection policy governs access to and use of this Website, available to Customers interested in the services offered by ENIPPON Co., Ltd.</p>
            <p>If you wish to contact our Data Protection Officer, you can do so through the link www.enippontours.com/contacto.</p>

            <h3>2.- Why is ENIPPON Co., Ltd. authorized to carry out data processing?</h3>
            <p>Customer data collected through online registration forms on the Website are managed by ENIPPON Co., Ltd. for the purpose of providing the services requested by the Customer.</p>
            <p>Pursuant to Japan&apos;s Personal Information Protection Act (APPI), ENIPPON Co., Ltd. hereby informs the Client of the existence of a personal data base managed under its responsibility, ensuring compliance with Japanese regulations and the proper handling of personal information.</p>

            <h3>3.- Processing of personal data and purpose of processing</h3>
            <p>ENIPPON Co., Ltd. may collect personal data from Clients through registration forms. These data may be used for the following purposes: Provision of the services offered on the Website.</p>

            <h3>4.- Conservation and Elimination of Personal Data</h3>
            <p>At ENIPPON Co., Ltd., we are committed to protecting our customers&apos; privacy and handling their information securely. We will retain customers&apos; personal data only for as long as necessary to fulfill the purposes of our business relationship and to comply with our legal obligations. At the close of each fiscal year, we will review the personal data in our system. Data that is no longer required for its intended purpose or does not require further retention for legal or compliance reasons will be securely deleted from our records and systems.</p>

            <h3>5.- Mandatory or voluntary nature of the information provided by the Client and veracity of the data</h3>
            <p>The Client guarantees that the personal data provided is true and undertakes to notify any changes. ENIPPON Co., Ltd. reserves the right to exclude from the services any Client who has provided false data, without prejudice to any legal action that may be appropriate.</p>
            <p>The Client is advised to exercise the utmost caution in protecting his/her personal data by using security tools, since ENIPPON Co., Ltd. is not responsible for theft, modification or loss of data that occurs illegally.</p>

            <h3>6.- Unauthorized practices and data retention</h3>
            <p>ENIPPON Co., Ltd. reserves the right to cancel the registration of Customers who:</p>
            <ul>
              <li>include or promote unlawful, immoral, obscene or harmful material;</li>
              <li>promote any type of discrimination;</li>
              <li>send unsolicited mass emails; or</li>
              <li>infringe intellectual property rights.</li>
            </ul>
            <p>Personal data will be retained as long as the Client does not express his/her desire to unsubscribe from the services, in order to receive information about ENIPPON Co., Ltd. products.</p>

            <h3>7.- Client rights in relation to their data</h3>
            <p>The Client has the right to:</p>
            <ul>
              <li>access your personal data,</li>
              <li>request rectification of inaccurate data,</li>
              <li>request the deletion of your data,</li>
              <li>limit the processing of your data,</li>
              <li>oppose the treatment, and</li>
              <li>request the portability of your data.</li>
            </ul>
            <p>To exercise these rights, the Client must prove his/her identity by sending a copy of his/her identity document, identification card, passport or other legally valid documentation.</p>
            <p>You can exercise these rights by sending an email to the email address specified on our website, www.enippontours.com/contacto.</p>
            <p>In the event of dissatisfaction with the processing of his/her data, the Client has the right to lodge a complaint with a Control Authority in Japan.</p>

            <h3>8.- Data security</h3>
            <p>The privacy and security of its Clients&apos; personal data is essential to ENIPPON Co., Ltd. Only authorized personnel may access this information, and ENIPPON Co., Ltd. maintains appropriate levels of security to prevent the loss, misuse, alteration, unauthorized access or theft of data provided through the Website, although it informs that Internet security measures are not infallible.</p>
            <p>ENIPPON Co., Ltd. is committed to complying with the duty of confidentiality in the handling of personal data, including the international transfer of data when appropriate.</p>

            <h3>9.- Questions</h3>
            <p>If you have any questions about this privacy policy, you can contact us through the following link: www.enippontours.com/contacto.</p>

            <h3>10.- Acceptance and Consent</h3>
            <p>The Client declares to have been informed of the conditions regarding the protection of personal data and accepts and consents to the processing of the same by ENIPPON Co., Ltd. under the terms and for the purposes established in this Privacy Policy.</p>

            <hr />

            {/* COPYRIGHT NOTICE */}
            <h2>COPYRIGHT NOTICE</h2>
            <p>This website and all of its content, including but not limited to text, graphics, logos, icons, images, photographs, videos, audio, software, and any other material (collectively, the &quot;Content&quot;), are the property of Enippon Co., Ltd. or content providers who have granted Enippon Co., Ltd. rights for its use. The use of the contents of this website is governed by the Copyright Act of Japan (著作権法) and international treaties to which Japan is a party, such as the Berne Convention, the TRIPS Agreement, and the WIPO Copyright Treaty.</p>

            <h3>Permitted Use of Content</h3>
            <p>The Content on this site is intended exclusively for personal and non-commercial use by visitors. Reproduction, distribution, modification, transmission, public display, or any other use of the Content without the prior written consent of Enippon Co., Ltd. is strictly prohibited and may result in civil and/or criminal penalties under Japanese law.</p>

            <h3>Photographs and Multimedia</h3>
            <p>All photographs, videos, and other multimedia elements used on this site are the exclusive property of Enippon Co., Ltd. or have been used with the proper permission of the rights holders. These elements may not be downloaded, copied, reproduced, or used in any form without the express authorization of Enippon Co., Ltd., except in cases permitted by law (e.g., fair use for personal, non-commercial purposes).</p>

            <h3>Limited Licenses</h3>
            <p>Accessing and using this website does not grant any right or license to use the logos, trademarks, trade names, or any other protected elements of Enippon Co., Ltd., whether implied or explicit, without prior written permission from Enippon Co., Ltd.</p>

            <h3>Permission Requests</h3>
            <p>If you wish to use any specific material from this site, such as images or multimedia content, please contact Enippon Co., Ltd. through www.enippontours.com/contact. All requests will be evaluated individually, and limited licenses may be granted under specific conditions.</p>

            <h3>Notice of Infringement</h3>
            <p>Enippon Co., Ltd. respects the intellectual property rights of third parties. If you believe that your work has been used on our site in a manner that constitutes copyright infringement, please notify us through www.enippontours.com/contact, providing detailed information regarding the alleged infringement so that we can take appropriate action.</p>
          </div>
        ) : (
          <div className="prose prose-gray max-w-none">
            {/* CONDICIONES GENERALES DE USO */}
            <h2>CONDICIONES GENERALES DE USO</h2>
            <p>El presente sitio web es propiedad de ENIPPON Co.,Ltd., con domicilio social en Jingumae, Shibuya-ku, Tokyo, 150-0001 – JAPAN.</p>
            <h3>Información previa</h3>
            <p>ENIPPON Co., Ltd., responsable del sitio web www.enippontours.com, se especializa en la organización de tours o actividades turísticas en diversas regiones de Japón, orientadas a Clientes interesados en estos servicios. A través de su plataforma www.enippontours.com, ENIPPON Co., Ltd. ofrece a cualquier persona física o jurídica (en adelante, el &quot;Cliente&quot;) la oportunidad de reservar actividades y tours turísticos.</p>

            <h3>1.- ACEPTACIÓN DE LAS CONDICIONES GENERALES DE USO Y ACCESO AL SITIO WEB</h3>
            <p>Al acceder, visualizar o utilizar los materiales, contenidos o servicios disponibles en el Sitio Web, el Cliente acepta y reconoce que ha comprendido y aceptado estas Condiciones Generales de Uso, que regulan los derechos y obligaciones entre ENIPPON Co., Ltd. y el Cliente para la contratación de los servicios de tours o actividades turísticas.</p>
            <p>Estas son las únicas Condiciones Generales de Uso aplicables al uso del Sitio Web (sin perjuicio de que existan condiciones particulares para ciertos servicios) y a la contratación de los servicios, reemplazando a cualquier otra condición previa, a menos que haya un acuerdo expreso y por escrito entre ENIPPON Co., Ltd. y el Cliente.</p>
            <p>No se requiere registro para acceder al Sitio Web; sin embargo, para contratar los servicios ofrecidos por ENIPPON Co., Ltd., será necesario que el Cliente se registre y acepte estas condiciones antes de proceder con el pago.</p>

            <h3>2.- OBJETIVO DEL SITIO WEB</h3>
            <p>ENIPPON Co., Ltd. ha creado este Sitio Web para proporcionar a los Clientes un servicio de reserva de tours o actividades turísticas en diferentes áreas de Japón.</p>

            <h3>3.- RESERVAS EN ENIPPON Co., Ltd. Y REGISTRO EN EL SITIO WEB</h3>
            <p>Para realizar reservas a través del Sitio Web, el Cliente debe proporcionar sus datos personales (nombre, apellidos, correo electrónico, teléfono y celular), o, en su caso, los datos de la persona por quien se realiza la reserva, para que ENIPPON Co., Ltd. pueda procesar la solicitud.</p>
            <p>Los Clientes se comprometen a proporcionar información veraz, exacta y actualizada sobre su identidad o la de la persona por quien se reserva el tour o actividad turística. Son responsables de la veracidad de los datos proporcionados y de cualquier consecuencia derivada de errores en la información.</p>

            <h3>4.- CONDICIONES ESPECÍFICAS SOBRE LA RESERVA DE TOUR O ACTIVIDADES TURÍSTICAS</h3>
            <p>Las reservas que realice cada Cliente a través del Sitio Web están sujetas a condiciones específicas aplicables a cada tour o actividad turística, que se encuentran en la descripción de cada servicio en el Sitio Web, así como en el correo de confirmación enviado por ENIPPON Co., Ltd. tras la reserva.</p>
            <h4>4.1.- Condiciones generales aplicables a todas las reservas.</h4>
            <p>Generalmente, la reserva de los tours o actividades turísticas ofrecidos por ENIPPON Co., Ltd. se sujeta a las siguientes condiciones:</p>
            <p>Los Clientes pueden modificar sus reservas siempre que las condiciones del tour o actividad turística lo permitan. Para realizar modificaciones, el Cliente podrá enviar una solicitud de cambio mediante correo electrónico, en respuesta al correo de confirmación de la reserva.</p>
            <p>El plazo mínimo de antelación para cada reserva varía según el tour o actividad turística. Este detalle se puede consultar en la descripción correspondiente en el Sitio Web. ENIPPON Co., Ltd. informa que no es posible reservar un tours o actividades turísticas con menos antelación de la indicada.</p>
            <h4>4.2.- Condiciones específicas relacionadas con la información del tour o actividad turística reservada.</h4>
            <p>El punto de encuentro, la fecha, el horario, la duración y toda la información necesaria para disfrutar del tour o actividad turística están detallados en la descripción de cada servicio en el Sitio Web, así como en el correo de confirmación enviado por ENIPPON Co., Ltd. tras la reserva.</p>
            <p>Es esencial que los Clientes sean puntuales y se presenten en el punto de encuentro en la hora y fecha indicadas en su reserva, ya que todos los tours o actividades turísticas están programados para salir a una hora específica y no se puede modificar la hora de inicio.</p>
            <p>El cliente dispone de un máximo de veinte (20) minutos de tolerancia para incorporarse al inicio del tour. Este tiempo de tolerancia no se recuperará ni extenderá la duración total del servicio al finalizar el tour.</p>
            <p>La duración de los tours o actividades turísticas publicados tienen carácter referencial y puede variar según el desarrollo del servicio o por factores externos a ENIPPON Co., Ltd., como condiciones meteorológicas, problemas de tráfico, huelgas, etc.</p>

            <h3>5.- CONDICIONES ESPECÍFICAS DE LAS RESERVAS</h3>
            <p>Los Clientes deben tener en cuenta los siguientes aspectos:</p>
            <ul>
              <li><strong>Modificación del lugar de encuentro:</strong> El Cliente puede cambiar el punto de encuentro siempre que las condiciones del servicio lo permitan. Para ello, podrá enviar una solicitud de cambio mediante correo electrónico, en respuesta al correo de confirmación de la reserva.</li>
              <li><strong>Contacto con el organizador:</strong> En el correo de confirmación de reserva, ENIPPON Co., Ltd. proporcionará el nombre, correo electrónico y número de emergencia del organizador, en caso de que el Cliente no pueda localizarlo o enfrente algún problema.</li>
              <li><strong>Paradas durante el trayecto:</strong> Si los Clientes necesitan hacer una parada durante el trayecto (por ejemplo, si están alojados en diferentes hoteles), esto puede conllevar un cargo adicional, que dependerá de la ciudad en la que se encuentren.</li>
              <li><strong>Ubicación del destino:</strong> Si la dirección de destino está fuera del área central de la ciudad, el traslado con el organizador conllevará un cargo adicional, que será responsabilidad del Cliente.</li>
              <li><strong>Modificaciones del trayecto acordado:</strong> Si el Cliente desea hacer cambios en los trayectos acordados, pueden existir cargos adicionales, que serán responsabilidad del Cliente.</li>
            </ul>

            <h3>6.- CONDICIONES ECONÓMICAS DE CONTRATACIÓN</h3>
            <p>La formalización de la reserva de los servicios de ENIPPON Co., Ltd. se considerará completada una vez que los Clientes hayan llenado y aceptado el formulario de reserva, y que la misma haya sido confirmada tras completar correctamente el proceso y el pago correspondiente.</p>
            <p>Los precios serán los indicados por ENIPPON Co., Ltd. en el momento de la reserva. Todos los servicios son de confirmación inmediata y el pago se realiza al momento de la reserva mediante tarjeta de crédito o débito (Visa o Mastercard) o Square. Por lo general, ENIPPON Co., Ltd. cobra el total a través de la plataforma de pago asignada por correo electrónico en el momento de la reserva.</p>
            <p>Los precios se expresan en yenes japoneses (JPY/¥), incluyendo impuestos. Si el Cliente desea conocer el precio en otra moneda, puede solicitarlo a través de la página de contacto de la web, y el importe total se indicará en la confirmación del servicio.</p>
            <p>En general, ENIPPON Co., Ltd. no aplica descuentos, a menos que se especifique en las condiciones del tour o actividad turística correspondiente.</p>
            <p>Tras la contratación, los Clientes recibirán un correo electrónico confirmando el cobro del servicio y proporcionando un recibo de compra. Es importante que el recibo no equivale a la factura de los servicios contratados, la cual puede ser solicitada una vez formalizada la reserva en el Sitio Web.</p>
            <p>Sitio Web la documentación relacionada con los servicios contratados. La información necesaria para realizar el tour o actividad turística será enviada por correo electrónico. En caso de cancelación conforme a lo indicado en el apartado 7 de estas Condiciones Generales de Uso, ENIPPON Co., Ltd. emitirá la documentación rectificativa correspondiente.</p>
            <p>ENIPPON Co., Ltd. emitirá una factura por la prestación de servicios, conforme a la normativa vigente.</p>
            <p>Se deberá notificar a ENIPPON Co., Ltd. cualquier cargo indebido o fraudulento en la tarjeta utilizada para la compra a través de www.enippontours.com/contacto, lo antes posible, para que la empresa pueda tomar las acciones necesarias.</p>
            <p>Las actividades reservadas mediante acciones o transacciones que sean sospechosas de fraude podrán ser canceladas por ENIPPON Co., Ltd.</p>

            <h3>7.- DESISTIMIENTO DEL CLIENTE, CESIONES Y CANCELACIONES DE TOURS O ACTIVIDADES TURÍSTICAS</h3>
            <p>En todo momento, el Cliente puede desistir de los tours o actividades turísticas solicitados o contratados, teniendo derecho a la devolución de las cantidades abonadas, ya sea del precio total o de un anticipo, según lo establecido, debiendo indemnizar a ENIPPON Co., Ltd. por los conceptos que a continuación se detallan:</p>
            <p>Para servicios de tours individuales y grupales o actividades turísticas, se aplicarán todos los gastos de gestión, comisiones de pago y cualquier costo de cancelación incurrido.</p>
            <p>En el caso que el desistimiento:</p>
            <ul>
              <li>Cancelaciones realizadas con más de 15 días de antelación al tour: se realizará un reembolso del 100%, deduciendo los gastos administrativos y las comisiones correspondientes a entidades bancarias, tarjetas, billeteras virtuales, plataformas y pasarelas de pago.</li>
              <li>Cancelaciones realizadas entre 7 y 14 días de antelación al tour: se realizará un reembolso del 50%, deduciendo los gastos administrativos y las comisiones correspondientes a entidades bancarias, tarjetas, billeteras virtuales, plataformas y pasarelas de pago.</li>
              <li>Cancelaciones realizadas entre 1 y 6 días de antelación al tour: no se realizarán reembolsos.</li>
              <li>Cancelaciones el mismo día del tour o no presentación: no se realizarán reembolsos.</li>
            </ul>
            <p><strong>Cesión de la reserva a terceros:</strong> El Cliente puede ceder su reserva de tour o actividad turística a una tercera persona, siempre que lo solicite por escrito con un mínimo de quince días antes de la fecha de inicio, a menos que ambas partes acuerden un plazo menor.</p>
            <p>El cesionario deberá cumplir con los mismos requisitos exigidos al cedente y ambos responderán solidariamente ante ENIPPON Co., Ltd. por el pago del precio y cualquier cargo adicional justificado por la cesión.</p>

            <h3>8.- ALTERACIONES</h3>
            <p>ENIPPON Co., Ltd. se compromete a facilitar a sus Clientes la totalidad de los servicios contratados en la oferta que ha dado origen al contrato de tour o actividad turística, con las condiciones y características estipuladas, de acuerdo con los siguientes puntos:</p>
            <p><strong>Modificación antes del inicio del tour o actividad turística:</strong> Si, antes de la fecha de inicio, ENIPPON Co., Ltd. debe modificar de manera significativa algún elemento esencial del contrato, incluido el precio, deberá informar inmediatamente al Cliente, ya sea directamente o, cuando actúe a través de un intermediario, mediante dicho intermediario.</p>
            <p><strong>Opciones del Cliente ante modificaciones:</strong> En este caso, salvo que las partes acuerden lo contrario, el Cliente podrá optar entre cancelar el contrato sin penalización alguna o aceptar las modificaciones propuestas, que incluirán la descripción de los cambios y su repercusión en el precio. El Cliente deberá comunicar su decisión a la ENIPPON Co., Ltd. (o al organizador, según corresponda) dentro de las 24 horas siguientes a la notificación de la modificación.</p>
            <p>Si el Cliente no comunica su decisión dentro del plazo indicado, se entenderá que opta por la cancelación del contrato sin penalización alguna.</p>
            <p><strong>Cancelación por parte de ENIPPON Co., Ltd. o Cliente:</strong> Si el Cliente opta por cancelar el contrato en base al apartado anterior o si ENIPPON Co., Ltd. cancela el tour o actividad turística antes de la fecha acordada por razones ajenas al Cliente, este tendrá derecho a:</p>
            <ul>
              <li>Recibir el reembolso completo de todas las cantidades pagadas.</li>
              <li>Participar en otro tour o actividad turística de calidad equivalente o superior, siempre que ENIPPON Co., Ltd. pueda ofrecerlo. Si el servicio alternativo es de calidad inferior, ENIPPON Co., Ltd. deberá reembolsar la diferencia de precio. Este derecho también aplica si el Cliente no recibe información de la reserva en los términos estipulados.</li>
            </ul>
            <p><strong>Limitación de Responsabilidad e Indemnización:</strong> ENIPPON Co., Ltd. no se hace responsable de indemnizar al Cliente en caso de incumplimiento de contrato, cancelación del tour o actividad turística debido a causas de fuerza mayor o circunstancias ajenas a su control. Estas incluyen, pero no se limitan a, condiciones climáticas extremas, desastres naturales, conflictos bélicos, emergencias de salud pública, huelgas, restricciones gubernamentales, circunstancias ajenas a quien las alega, anormales e imprevisibles, cuyas consecuencias no se habrían podido evitar incluso con diligencia, u otras situaciones anormales e imprevisibles que impidan la realización de los servicios contratados. ENIPPON Co., Ltd. se compromete a informar al Cliente de tales situaciones en la medida de lo posible y con la mayor antelación posible, pero no asumirá responsabilidad alguna por cualquier inconveniente o pérdida que pueda derivarse de estas circunstancias.</p>
            <p><strong>Alteraciones después del inicio del tour o actividad turística:</strong> Si, después de comenzado el tour o actividad turística, el organizador no proporciona una parte significativa de los servicios contratados, tomará las medidas adecuadas para la continuación de la actividad sin cargo adicional. Si el Cliente acepta continuar con las soluciones ofrecidas, se considerará que acepta estas modificaciones.</p>
            <p><strong>Cláusula de reembolso en caso de Incapacidad del organizador:</strong> En el caso de que el organizador asignado al tour o actividad turística sufra un problema grave que le impida continuar con la prestación del servicio, ENIPPON Co., Ltd. se compromete a reembolsar al Cliente únicamente el importe correspondiente a las horas no cumplidas según lo estipulado en el contrato. Este reembolso se calculará sobre la base del precio acordado para el tour o actividad turística, y se efectuará en un plazo de 3 y 5 días hábiles tras la notificación del incidente.</p>
            <p><strong>Diligencia en caso de reclamación:</strong> En caso de reclamación, ENIPPON Co., Ltd. deberá actuar con diligencia para encontrar soluciones adecuadas.</p>
            <p><strong>Servicios no incluidos en el contrato:</strong> ENIPPON Co., Ltd. no se hará responsable de ningún servicio adicional que no esté expresamente incluido en el contrato del tour o actividad turística. Esto incluye, pero no se limita a, el transporte desde el lugar de origen del Cliente hasta el punto de inicio del tour o actividad turística, así como cualquier servicio de transporte durante o después de la actividad. Asimismo, ENIPPON Co., Ltd. no asumirá responsabilidad por reservas realizadas antes, durante o después del tour o actividad turística. No existirá obligación de indemnización en caso de cancelación de la actividad por las causas previstas en el apartado 5.</p>
            <p><strong>Aceptación de condiciones:</strong> Al aceptar las presentes condiciones generales, el Cliente declara haber leído y aceptado esta política de cancelaciones, y manifiesta su acuerdo con las condiciones de cancelación aplicables a tours o actividades turísticas reservados a través del sitio web.</p>

            <h3>9.- CONDUCTA EN EL SITIO WEB</h3>
            <p>Los Clientes se comprometen a utilizar el sitio web www.enippontours.com de manera legal, responsable y en conformidad con la legislación japonesa, específicamente conforme a la Ley de Protección de la Información Personal (Ley No. 57 de 2003, también conocida como APPI, enmendada en 2020) y otras normativas aplicables, respetando los principios de buena fe y diligencia. En particular, los Clientes se obligan a:</p>
            <ul>
              <li>No proporcionar información falsa, inexacta o incompleta ni suplantar la identidad de otras personas o entidades.</li>
              <li>No utilizar el sitio web para fines fraudulentos, actividades ilícitas, ni en relación con dichas actividades. Esto incluye cualquier acción prohibida bajo el Código Penal Japonés (Ley No. 45 de 1907).</li>
              <li>No introducir, enviar o difundir virus informáticos u otros componentes dañinos que puedan alterar, interrumpir o comprometer la integridad del sitio web y sus sistemas, en cumplimiento con la Ley de Prohibición del Acceso No Autorizado (Ley No. 128 de 1999) y la Ley de Prevención de Daños a Sistemas Informáticos.</li>
              <li>No acceder ni intentar acceder a contenido ilegal, ofensivo, o que infrinja derechos de autor u otros derechos protegidos bajo las leyes japonesas, como establece la Ley de Derechos de Autor de Japón (Ley No. 48 de 1970, modificada en 2021).</li>
              <li>No descargar, enviar ni distribuir contenido que incumpla con la legislación vigente o los derechos de terceros, conforme a la Ley de Protección de la Información Personal (APPI) y las disposiciones de la Ley de Comercio Electrónico (Ley No. 29 de 2000).</li>
            </ul>
            <p>ENIPPON Co., Ltd. se reserva el derecho de denegar o restringir el acceso al sitio web si detecta cualquier uso inapropiado o comportamiento que infrinja las condiciones establecidas en esta cláusula, según lo permita la legislación japonesa.</p>

            <h3>10.- RESEÑAS, OPINIONES Y COMENTARIOS EN LA PÁGINA WEB</h3>
            <p>Los Clientes que hayan reservado tours o actividades turísticas a través de ENIPPON Co., Ltd. podrán publicar sus reseñas, opiniones y comentarios en el sitio web, de acuerdo con la normativa vigente en Japón, incluyendo la Ley de Protección de la Información Personal (Ley No. 57 de 2003, APPI) y el Código Penal Japonés (Ley No. 45 de 1907).</p>
            <p>ENIPPON Co., Ltd. enviará un correo electrónico al Cliente una vez que el tour o actividad turística haya concluido, con el propósito de que este evalúe la experiencia y el servicio recibido. Una vez que ENIPPON Co., Ltd. reciba la opinión y evaluación del Cliente, procederá a revisarla y publicarla en el sitio web a la mayor brevedad posible, conforme a las disposiciones legales aplicables.</p>
            <p>ENIPPON Co., Ltd. publicará las opiniones de los Clientes siempre que su contenido no sea ilegal, obsceno, abusivo, amenazante, difamatorio, invasivo de la privacidad de terceros, o que sea de alguna manera censurable o inapropiado. Además, no se permitirán opiniones que incluyan anuncios, enlaces a otros sitios web, o que no se correspondan con el servicio evaluado, en concordancia con la Ley de Comercio Electrónico (Ley No. 29 de 2000).</p>
            <p>ENIPPON Co., Ltd. se reserva específicamente el derecho de no publicar aquellas opiniones que contengan las siguientes manifestaciones:</p>
            <ul>
              <li><strong>Expresiones discriminatorias:</strong> Se prohibirán expresiones que ataquen a una persona y que infrinjan su derecho al honor, la intimidad personal y familiar, la propia imagen y la dignidad humana, en cumplimiento con el Código Penal Japonés (Ley No. 45 de 1907). No se aceptarán publicaciones discriminatorias basadas en raza, género, religión, opinión, nacionalidad, discapacidad u otras circunstancias personales o sociales.</li>
              <li><strong>Actividades ilegales:</strong> No se permitirá contenido que promueva actividades ilegales o que contenga material obsceno o difamatorio, conforme a la Ley de Prevención de Daños a Sistemas Informáticos y la Ley de Prohibición del Acceso No Autorizado (Ley No. 128 de 1999).</li>
              <li><strong>Violencia:</strong> Queda estrictamente prohibido incluir expresiones que fomenten la violencia, incluida la violencia sexual o hacia animales y personas, según las disposiciones del Código Penal Japonés.</li>
              <li><strong>Contenido degradante:</strong> No se aceptarán opiniones o comentarios que resulten amenazantes, intimidantes o que promuevan la violencia hacia individuos o grupos específicos, en conformidad con las leyes japonesas de protección contra la discriminación y el acoso.</li>
            </ul>
            <p><strong>Comunicaciones entre ENIPPON Co., Ltd. y los Clientes:</strong> Las comunicaciones entre ENIPPON Co., Ltd. y los Clientes se llevarán a cabo por escrito a través de correo electrónico. Las comunicaciones dirigidas a ENIPPON Co., Ltd. deberán enviarse a info@enippontours.com. Las comunicaciones hacia los Clientes se realizarán utilizando la dirección de correo electrónico proporcionada al momento del registro, en línea con las disposiciones de la Ley de Protección de la Información Personal (APPI, Ley No. 57 de 2003).</p>

            <h3>11.- EXCLUSIÓN DE RESPONSABILIDAD</h3>
            <p>Sin perjuicio de la responsabilidad en los servicios de tours o actividades turísticas aplicable conforme a la Ley General de Clientes y en conformidad con la legislación vigente en Japón, específicamente la Ley de Protección de la Información Personal (Ley No. 57 de 2003, APPI) y otras normativas mencionadas, ENIPPON Co., Ltd. no se hace responsable de las siguientes circunstancias, de manera enunciativa pero no limitativa:</p>
            <ul>
              <li>Cancelaciones realizadas fuera de plazo por parte de los Clientes. ENIPPON Co., Ltd. no será responsable de la devolución de importes pagados si los Clientes no cumplen con el plazo de cancelación estipulado en la política aplicable a cada servicio.</li>
              <li>Retrasos o errores cometidos por los Clientes para llegar al punto de encuentro del tour o actividad reservada. ENIPPON Co., Ltd. no asumirá responsabilidad si el Cliente pierde el tour o actividad debido a falta de puntualidad o por no presentarse en el lugar correspondiente.</li>
              <li>Daños y robos sufridos por los Clientes y sus bienes durante el tour o actividad contratada, conforme a lo dispuesto en el Código Civil Japonés (Ley No. 89 de 1896) sobre la responsabilidad del Cliente respecto a sus pertenencias.</li>
              <li>Lesiones, daños y accidentes que pueda sufrir el Cliente durante el tour o que, habiéndolos sufrido previamente, le impidan disfrutar del servicio contratado.</li>
              <li>Errores en la información proporcionada por el Cliente sobre horarios o puntos de encuentro. ENIPPON Co., Ltd. no será responsable si el organizador no acude al punto de encuentro debido a información incorrecta proporcionada por el Cliente.</li>
              <li>Pérdida de vuelos, trenes, autobuses u otros medios de transporte. El Cliente es responsable de organizar su tiempo y solicitar servicios de traslado con la debida antelación.</li>
              <li>Condiciones meteorológicas en las que se lleve a cabo el tour o actividad turística reservada. ENIPPON Co., Ltd. no será responsable de las condiciones del clima; el servicio se considerará correctamente prestado.</li>
              <li>Calidad y adecuación del servicio contratado por el Cliente. La responsabilidad sobre la satisfacción del Cliente queda limitada a la entrega del servicio según lo contratado.</li>
              <li>Duración variable de los tours o actividades turísticas. Si el tour ha cubierto todos los puntos de interés previstos, pero la duración ha variado ligeramente por factores externos a ENIPPON Co., Ltd., el servicio se considerará como cumplido.</li>
            </ul>
            <h4>Exclusión de Responsabilidad por el Acceso o Uso del Sitio Web</h4>
            <p>ENIPPON Co., Ltd. no otorga ninguna garantía ni se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso del contenido del sitio web, en conformidad con la Ley de Comercio Electrónico (Ley No. 29 de 2000) y el Código Penal Japonés (Ley No. 45 de 1907) en los siguientes casos:</p>
            <ul>
              <li>Falta de disponibilidad, mantenimiento y correcto funcionamiento del sitio web y/o de sus servicios o contenidos, conforme a la Ley de Prohibición del Acceso No Autorizado (Ley No. 128 de 1999).</li>
              <li>Fallos técnicos atribuibles a terceros o causas de fuerza mayor que impidan el correcto funcionamiento del sitio web.</li>
              <li>Casos de fuerza mayor, tales como fallos en la red de Internet, acciones u omisiones de terceros, o cualquier otra causa fuera del control de ENIPPON Co., Ltd. que afecte el uso normal del sitio web.</li>
              <li>Uso ilícito, negligente o fraudulento del sitio web contrario a las presentes condiciones y a la buena fe, conforme al Código Penal Japonés (Ley No. 45 de 1907).</li>
            </ul>
            <p>ENIPPON Co., Ltd. se reserva el derecho de tomar las acciones legales que considere oportunas contra los Clientes en caso de incumplimiento de las presentes Condiciones Generales de Uso, conforme a la legislación vigente en Japón.</p>

            <h3>12.- PROPIEDAD INTELECTUAL</h3>
            <h4>12.1 Propiedad Intelectual e Industrial relativa al Sitio Web titularidad de ENIPPON Co., Ltd.</h4>
            <p>Todos los derechos sobre el contenido, diseño y código fuente de este Sitio Web, y en particular, los derechos sobre las fotografías, imágenes, textos, logotipos, diseños, marcas, nombres comerciales y datos incluidos en el Sitio Web son propiedad de ENIPPON Co., Ltd., o bien de terceros que han autorizado expresamente a ENIPPON Co., Ltd. para su uso. La protección de estos derechos está amparada por la Ley de Derechos de Autor de Japón (Ley No. 48 de 1970) y la Ley de Marcas de Japón (Ley No. 127 de 1959), que establecen derechos exclusivos sobre obras creativas y signos distintivos.</p>
            <p>ENIPPON Co., Ltd. no concede ninguna licencia ni autorización de uso sobre sus derechos de propiedad intelectual e industrial. En ningún caso se entenderá que el acceso y navegación de los Clientes implica una renuncia, transmisión, licencia o cesión total ni parcial de dichos derechos. Cualquier uso no autorizado de estos contenidos por parte del Cliente será considerado una infracción grave de los derechos de propiedad intelectual e industrial, conforme a la Ley de Derechos de Autor de Japón y la Ley de Marcas de Japón.</p>
            <h4>12.2 Propiedad Intelectual relativa a las opiniones de los Clientes publicadas en el Sitio Web</h4>
            <p>Al publicar opiniones en el Sitio Web, los Clientes otorgan a ENIPPON Co., Ltd. una licencia universal, sin restricciones y gratuita, para el uso, distribución, comunicación pública, adaptación y reproducción de dichas opiniones, en conformidad con la Ley de Derechos de Autor de Japón (Ley No. 48 de 1970). Esta licencia permite a ENIPPON Co., Ltd. transformar y adaptar las opiniones de los Clientes para fines de publicidad y promoción en sus sitios web y redes sociales.</p>

            <h3>13.- MODIFICACIONES</h3>
            <p>ENIPPON Co., Ltd. se reserva el derecho de realizar modificaciones en las presentes Condiciones Generales de Uso, notificando previamente a los Clientes. Estas modificaciones serán válidas desde su publicación en el Sitio Web, de acuerdo con la Ley de Comercio Electrónico (Ley No. 29 de 2000), que establece la validez de la notificación electrónica para cambios contractuales.</p>

            <h3>14.- CLÁUSULA DE SALVAGUARDA</h3>
            <p>Cada cláusula de estas Condiciones Generales de Uso se interpretará de manera independiente y autónoma, de modo que, si alguna de ellas fuera declarada nula por sentencia judicial o resolución arbitral firme, el resto de las estipulaciones permanecerán válidas. Se sustituirá cualquier cláusula afectada por otra que conserve los efectos perseguidos, conforme al Código Civil Japonés (Ley No. 89 de 1896), el cual establece directrices para la interpretación y modificación de contratos.</p>

            <h3>15.- FUERO Y LEGISLACIÓN APLICABLE</h3>
            <p>Las presentes Condiciones Generales de Uso se regirán por la legislación japonesa. En caso de litigio sobre la interpretación, ejecución o validez de estas Condiciones Generales de Uso, serán competentes los Juzgados y Tribunales correspondientes al Cliente, conforme al Código de Procedimiento Civil Japonés (Ley No. 109 de 1996), que determina la jurisdicción en casos contractuales.</p>
            <p>ENIPPON Co., Ltd. informa a los Clientes de que dispone de una Hoja de Reclamación a través de la cual podrán presentar quejas o reclamaciones en relación con los servicios, conforme a la Ley de Protección del Consumidor (Ley No. 78 de 1970), la cual establece el derecho a la información y al reclamo para los consumidores en Japón.</p>

            <hr />

            {/* POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS */}
            <h2>POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>

            <h3>1.- Presentación y derecho de información</h3>
            <p>El presente sitio web es propiedad de ENIPPON Co., Ltd., con domicilio social en Jingumae, Shibuya-ku, Tokyo, Japón.</p>
            <p>ENIPPON Co., Ltd. se compromete a proteger la privacidad y los datos personales de sus Clientes, cumpliendo con todas las disposiciones aplicables de la Ley de Protección de la Información Personal de Japón (APPI). La presente política de protección de datos regula el acceso y el uso de este Sitio Web, disponible para Clientes interesados en los servicios ofrecidos por ENIPPON Co., Ltd.</p>
            <p>Si deseas contactar con nuestro Responsable de Protección de Datos, puedes hacerlo a través del enlace www.enippontours.com/contacto.</p>

            <h3>2.- ¿Por qué ENIPPON Co., Ltd. está legitimada para llevar a cabo el tratamiento de datos?</h3>
            <p>Los datos de los Clientes recabados a través de formularios de registro online en el Sitio Web son gestionados por ENIPPON Co., Ltd. con la finalidad de prestar los servicios solicitados por el Cliente.</p>
            <p>De conformidad con la Ley de Protección de la Información Personal de Japón (APPI), ENIPPON Co., Ltd. informa al Cliente de la existencia de una base de datos de carácter personal gestionada bajo su responsabilidad, garantizando su cumplimiento con las normativas japonesas y el manejo adecuado de la información personal.</p>

            <h3>3.- Procesamiento de datos personales y finalidad del tratamiento</h3>
            <p>ENIPPON Co., Ltd. puede recabar datos personales de los Clientes a través de formularios de registro. Estos datos pueden utilizarse para la siguiente finalidad: Prestación de los servicios ofrecidos en el Sitio Web.</p>

            <h3>4.- Conservación y Eliminación de Datos Personales</h3>
            <p>En ENIPPON Co., Ltd., nos comprometemos a proteger la privacidad de nuestros clientes y a manejar su información de manera segura. Conservaremos los datos personales de los clientes únicamente durante el período necesario para cumplir con los fines de nuestra relación comercial y para cumplir con nuestras obligaciones legales. Al cierre de cada año fiscal, revisaremos los datos personales en nuestro sistema. Aquellos datos que ya no sean necesarios para los fines previstos o que no requieran conservación adicional por razones legales o de cumplimiento serán eliminados de manera segura de nuestros registros y sistemas.</p>

            <h3>5.- Carácter obligatorio o voluntario de la información proporcionada por el Cliente y veracidad de los datos</h3>
            <p>El Cliente garantiza que los datos personales proporcionados son veraces y se compromete a notificar cualquier modificación. ENIPPON Co., Ltd. se reserva el derecho de excluir de los servicios a cualquier Cliente que haya proporcionado datos falsos, sin perjuicio de las acciones legales que puedan corresponder.</p>
            <p>Se recomienda al Cliente ejercer la máxima precaución en la protección de sus datos personales mediante el uso de herramientas de seguridad, ya que ENIPPON Co., Ltd. no se responsabiliza por sustracciones, modificaciones o pérdidas de datos que ocurran de manera ilícita.</p>

            <h3>6.- Prácticas no permitidas y conservación de los datos</h3>
            <p>ENIPPON Co., Ltd. se reserva el derecho de cancelar el registro de Clientes que:</p>
            <ul>
              <li>incluyan o promocionen material ilícito, inmoral, obsceno o nocivo;</li>
              <li>promuevan cualquier tipo de discriminación;</li>
              <li>envíen correos masivos no solicitados; o</li>
              <li>infrinjan derechos de propiedad intelectual.</li>
            </ul>
            <p>Los datos personales se conservarán mientras el Cliente no manifieste su deseo de darse de baja de los servicios, con el objetivo de recibir información sobre los productos de ENIPPON Co., Ltd.</p>

            <h3>7.- Derechos del Cliente en relación con sus datos</h3>
            <p>El Cliente tiene derecho a:</p>
            <ul>
              <li>acceder a sus datos personales,</li>
              <li>solicitar la rectificación de datos inexactos,</li>
              <li>solicitar la eliminación de sus datos,</li>
              <li>limitar el tratamiento de sus datos,</li>
              <li>oponerse al tratamiento, y</li>
              <li>solicitar la portabilidad de sus datos.</li>
            </ul>
            <p>Para ejercer estos derechos, el Cliente debe acreditar su identidad enviando una copia de su documento de identidad, tarjeta de identificación, pasaporte u otra documentación que sea legalmente válido.</p>
            <p>Puede ejercer estos derechos enviando un correo a la dirección de email especificada en nuestro sitio web, www.enippontours.com/contacto.</p>
            <p>En caso de insatisfacción con el tratamiento de sus datos, el Cliente tiene derecho a presentar una reclamación ante una Autoridad de Control en Japón.</p>

            <h3>8.- Seguridad de los datos</h3>
            <p>La privacidad y seguridad de los datos personales de sus Clientes es fundamental para ENIPPON Co., Ltd. Solo el personal autorizado puede acceder a esta información, y ENIPPON Co., Ltd. mantiene los niveles de seguridad adecuados para prevenir la pérdida, uso indebido, alteración, acceso no autorizado o robo de los datos proporcionados a través del Sitio Web, aunque informa que las medidas de seguridad en Internet no son infalibles.</p>
            <p>ENIPPON Co., Ltd. se compromete a cumplir con el deber de confidencialidad en el manejo de datos personales, incluyendo la transferencia internacional de datos cuando corresponda.</p>

            <h3>9.- Preguntas</h3>
            <p>Si tienes alguna pregunta sobre esta política de privacidad, puedes contactarnos a través del siguiente enlace: www.enippontours.com/contacto.</p>

            <h3>10.- Aceptación y Consentimiento</h3>
            <p>El Cliente declara haber sido informado de las condiciones sobre la protección de datos personales y acepta y consiente el tratamiento de los mismos por parte de ENIPPON Co., Ltd. en los términos y para los fines establecidos en esta Política de Privacidad.</p>

            <hr />

            {/* AVISO DE DERECHOS DE AUTOR */}
            <h2>AVISO DE DERECHOS DE AUTOR</h2>
            <p>Este sitio web y todo su contenido, incluidos, entre otros, textos, gráficos, logotipos, iconos, imágenes, fotografías, videos, audios, software y cualquier otro material (colectivamente, el &quot;Contenido&quot;), son propiedad de Enippon Co., Ltd. o de los proveedores de contenido que han otorgado a Enippon Co., Ltd. los derechos para su uso. El uso de los contenidos de este sitio web se rige por la Ley de Derechos de Autor de Japón (Copyright Act, 著作権法) y los tratados internacionales de los que Japón es parte, como el Convenio de Berna, el Acuerdo ADPIC y el Convenio de la OMPI sobre Derecho de Autor.</p>

            <h3>Uso Permitido del Contenido</h3>
            <p>El Contenido de este sitio está destinado exclusivamente para uso personal y no comercial por parte de los visitantes del sitio. La reproducción, distribución, modificación, transmisión, exhibición pública o cualquier otro uso del Contenido sin el consentimiento previo por escrito de Enippon Co., Ltd. está estrictamente prohibido y puede dar lugar a sanciones civiles y/o penales bajo la ley japonesa.</p>

            <h3>Fotografías y Multimedia</h3>
            <p>Todas las fotografías, videos y otros elementos multimedia utilizados en este sitio son propiedad exclusiva de Enippon Co., Ltd. o han sido utilizados con el debido permiso de los titulares de los derechos. Estos elementos no pueden descargarse, copiarse, reproducirse o utilizarse de ninguna forma sin autorización expresa de Enippon Co., Ltd., excepto en los casos permitidos por la ley (por ejemplo, el uso justo para fines personales, no comerciales).</p>

            <h3>Licencias Limitadas</h3>
            <p>El acceso y uso de este sitio web no otorgan ningún derecho o licencia para utilizar los logotipos, marcas, nombres comerciales o cualquier otro elemento protegido de Enippon Co., Ltd., ya sea de forma implícita o explícita, sin el permiso previo y por escrito de Enippon Co., Ltd.</p>

            <h3>Solicitud de Permisos</h3>
            <p>Si deseas utilizar algún material específico de este sitio, como imágenes o contenido multimedia, por favor contacta a Enippon Co., Ltd. a través de www.enippontours.com/contacto. Todas las solicitudes serán evaluadas individualmente y se podrán conceder licencias limitadas bajo condiciones específicas.</p>

            <h3>Notificación de Infracción</h3>
            <p>Enippon Co., Ltd. respeta los derechos de propiedad intelectual de terceros. Si consideras que tu trabajo ha sido utilizado en nuestro sitio de una manera que constituya una infracción de derechos de autor, por favor notifícanos a través de www.enippontours.com/contacto, proporcionando información detallada sobre la supuesta infracción para que podamos tomar las medidas adecuadas.</p>
          </div>
        )}
      </div>

      <footer className="bg-[#2d2d44] text-white/60 text-center text-xs py-6">
        &copy; {new Date().getFullYear()} ENIPPON Co.,Ltd. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
      </footer>
    </div>
  );
}
