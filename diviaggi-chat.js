/*! Diviaggi Chat v1.1 · widget de calificación de leads (español e inglés) · se instala con un <script> */
(function(){
"use strict";
const T = {
"es": {
"sub": "Responde al instante",
"restart": "Empezar de nuevo",
"typing": "Escribiendo…",
"send": "Enviar",
"done": "Listo",
"empty": "Escribe una respuesta para continuar.",
"hello": "¡Hola! Soy el asistente de Diviaggi ✈️",
"lang_q": "¿En qué idioma prefieres continuar?",
"help": "¿En qué te puedo ayudar hoy?",
"m_quote": "Quiero cotizar un viaje",
"m_faq": "Tengo dudas",
"m_booking": "Ya tengo una reserva",
"m_advisor": "Hablar con un asesor",
"faq_q": "Claro. ¿Sobre qué tema?",
"f_pay": "Formas de pago",
"f_docs": "Pasaporte y visas",
"f_cancel": "Cambios y cancelaciones",
"f_ins": "Seguro de viaje",
"f_groups": "Viajes en grupo",
"f_hours": "Horario de atención",
"a_pay": "Aceptamos tarjeta de crédito y débito, transferencia y, en muchos paquetes, pagos a meses o en parcialidades. Tu asesor te confirma las opciones exactas para tu viaje.",
"a_docs": "Para viajes internacionales necesitas pasaporte vigente (idealmente con más de 6 meses de vigencia al regresar). Algunos destinos piden visa o permiso electrónico. Dinos el destino y un asesor te confirma los requisitos.",
"a_cancel": "Las condiciones de cambio y cancelación dependen de la aerolínea, el hotel y la tarifa. Antes de pagar te mostramos por escrito las políticas de tu reserva.",
"a_ins": "Sí, podemos incluir seguro de viaje con asistencia médica, equipaje y cancelación. Lo recomendamos para todo viaje internacional.",
"a_groups": "Sí, organizamos viajes para grupos, familias, bodas y empresas, con tarifas especiales a partir de cierto número de personas.",
"a_hours": "Nuestros asesores atienden de lunes a viernes de 9:00 a 19:00 y sábados de 10:00 a 14:00. Este asistente funciona las 24 horas y deja tu solicitud lista para que te contacten.",
"faq_next": "¿Qué quieres hacer ahora?",
"faq_quote": "Cotizar mi viaje",
"faq_more": "Otra duda",
"bk_q": "Te ayudo con tu reserva. ¿Qué necesitas?",
"bk_dates": "Cambiar fechas",
"bk_add": "Agregar servicios",
"bk_conf": "Confirmar itinerario",
"bk_prob": "Problema con mi reserva",
"bk_other": "Otro",
"bk_code_q": "¿Me compartes tu número o código de reserva? Si no lo tienes a la mano, escribe “no lo tengo”.",
"bk_code_ph": "Código de reserva",
"adv_q": "Con gusto te paso con un asesor. ¿Es sobre un viaje nuevo?",
"adv_yes": "Sí, un viaje nuevo",
"adv_no": "No, otra cosa",
"adv_msg_q": "Cuéntame brevemente qué necesitas.",
"adv_msg_ph": "Tu mensaje",
"trip_intro": "¡Perfecto! Te haré unas preguntas rápidas para armar una propuesta a tu medida. Toma menos de 2 minutos.",
"type_q": "¿Qué tipo de viaje buscas?",
"t_beach": "Playa y descanso",
"t_city": "Ciudad y cultura",
"t_adv": "Aventura y naturaleza",
"t_cruise": "Crucero",
"t_honey": "Luna de miel o aniversario",
"t_family": "Viaje familiar",
"t_europe": "Europa",
"t_other": "Otro",
"dest_q": "¿Ya tienes un destino en mente?",
"dest_yes": "Sí, ya sé a dónde",
"dest_many": "Tengo varias opciones",
"dest_no": "No, recomiéndenme",
"dest_where": "¿A dónde te gustaría ir?",
"dest_which": "¿Cuáles opciones estás considerando?",
"dest_ph": "Ej. Cancún, Madrid, Japón…",
"orig_q": "¿Desde qué ciudad saldrías?",
"orig_ph": "Ciudad de salida",
"when_q": "¿Cuándo te gustaría viajar?",
"w1": "En menos de 1 mes",
"w2": "En 1 a 3 meses",
"w3": "En 3 a 6 meses",
"w4": "En más de 6 meses",
"w5": "Mis fechas son flexibles",
"dur_q": "¿Cuántos días durará el viaje?",
"d1": "Fin de semana (2-3 días)",
"d2": "4 a 7 días",
"d3": "8 a 14 días",
"d4": "Más de 2 semanas",
"who_q": "¿Con quién viajas?",
"p_solo": "Solo",
"p_couple": "En pareja",
"p_kids": "Familia con niños",
"p_fam": "Familia sin niños",
"p_friends": "Grupo de amigos",
"p_work": "Viaje de empresa",
"ppl_q": "¿Cuántas personas en total?",
"ppl_kids": "Si puedes, indica las edades de los niños.",
"ppl_ph": "Ej. 4 (2 adultos, niños de 6 y 9)",
"bud_q": "¿Qué presupuesto aproximado tienes por persona (en {m})? Nos ayuda a proponerte opciones que encajen.",
"b1": "Menos de 800 {m}",
"b2": "800 a 1,500 {m}",
"b3": "1,500 a 3,000 {m}",
"b4": "Más de 3,000 {m}",
"b5": "Aún no lo sé",
"serv_q": "¿Qué servicios quieres incluir? Puedes elegir varios.",
"s_fly": "Vuelos",
"s_hotel": "Hotel",
"s_transfer": "Traslados",
"s_tours": "Tours y excursiones",
"s_ins": "Seguro de viaje",
"s_car": "Renta de auto",
"s_all": "Todo incluido",
"none": "Ninguno por ahora",
"hotel_q": "¿Qué categoría de hospedaje prefieres?",
"h1": "Económico",
"h2": "3 estrellas",
"h3": "4 estrellas",
"h4": "5 estrellas o boutique",
"h5": "Me da igual",
"stage_q": "¿En qué etapa estás?",
"st1": "Listo para reservar",
"st2": "Comparando opciones",
"st3": "Solo buscando ideas",
"notes_q": "¿Algo más que debamos saber? Celebración, necesidades especiales, preferencias…",
"notes_yes": "Sí, quiero agregar algo",
"notes_no": "No, es todo",
"notes_tell": "Cuéntame.",
"notes_ph": "Tus comentarios",
"src_q": "¿Cómo nos conociste?",
"src_google": "Google",
"src_ref": "Recomendación",
"src_other": "Otro",
"name_q": "¡Gracias! Para que un asesor te contacte, ¿cuál es tu nombre?",
"name_ph": "Nombre y apellido",
"name_err": "Escribe tu nombre y apellido para continuar.",
"phone_q": "Mucho gusto, {n}. ¿Tu WhatsApp o teléfono? Elige primero tu país.",
"phone_ph": "Número sin código de país",
"phone_ph_other": "Número completo con +código",
"phone_err": "Para {c} el número debe tener {r} dígitos. Escribiste {d}.",
"phone_fake": "Ese número no parece real. Revísalo, por favor.",
"country": "País",
"email_q": "¿Y tu correo electrónico?",
"email_ph": "tucorreo@ejemplo.com",
"email_err": "Ese correo no es válido. Revisa que tenga el formato nombre@dominio.com.",
"email_typo": "¿Quisiste decir {s}?",
"email_fix": "Sí, corregir",
"email_keep": "No, está bien así",
"email_disp": "Usa un correo personal o de trabajo; no aceptamos correos temporales.",
"pref_q": "¿Cómo prefieres que te contactemos?",
"pr_wa": "WhatsApp",
"pr_call": "Llamada",
"pr_mail": "Correo",
"news_q": "¿Te gustaría recibir nuestras promociones y ofertas de viaje por correo, una vez al mes?",
"news_yes": "Sí, suscríbeme",
"news_no": "No, gracias",
"consent_q": "Última pregunta: ¿aceptas que Diviaggi use tus datos para enviarte tu cotización y darte seguimiento?",
"c_yes": "Sí, acepto",
"c_no": "No",
"declined": "Entendido, no guardaremos tus datos. Si cambias de opinión, puedes empezar de nuevo.",
"fin_hot": "¡Listo! Un asesor te contactará muy pronto con opciones para tu viaje.",
"fin_warm": "¡Listo! Un asesor revisará tu solicitud y te contactará en menos de 24 horas.",
"fin_cold": "¡Listo! Te enviaremos ideas y opciones por correo, y cuando quieras avanzar, un asesor te ayuda.",
"fin_news": "Quedaste suscrito a nuestras promociones mensuales.",
"wa_btn": "Escribir al asesor por WhatsApp"
},
"en": {
"sub": "Replies instantly",
"restart": "Start over",
"typing": "Typing…",
"send": "Send",
"done": "Done",
"empty": "Type an answer to continue.",
"hello": "Hi! I’m the Diviaggi assistant ✈️",
"lang_q": "Which language would you like to continue in?",
"help": "How can I help you today?",
"m_quote": "I want a trip quote",
"m_faq": "I have questions",
"m_booking": "I already have a booking",
"m_advisor": "Talk to an advisor",
"faq_q": "Sure. What’s it about?",
"f_pay": "Payment options",
"f_docs": "Passports and visas",
"f_cancel": "Changes and cancellations",
"f_ins": "Travel insurance",
"f_groups": "Group travel",
"f_hours": "Opening hours",
"a_pay": "We accept credit and debit cards, bank transfer and, for many packages, installment payments. Your advisor will confirm the exact options for your trip.",
"a_docs": "For international travel you need a valid passport (ideally valid for 6+ months after you return). Some destinations require a visa or an electronic travel authorization. Tell us your destination and an advisor will confirm the requirements.",
"a_cancel": "Change and cancellation terms depend on the airline, hotel and fare. Before you pay, we’ll show you your booking’s policies in writing.",
"a_ins": "Yes, we can include travel insurance covering medical assistance, baggage and cancellation. We recommend it for every international trip.",
"a_groups": "Yes, we organize trips for groups, families, weddings and companies, with special rates from a certain group size.",
"a_hours": "Our advisors are available Monday to Friday 9:00–19:00 and Saturdays 10:00–14:00. This assistant works 24/7 and gets your request ready so they can contact you.",
"faq_next": "What would you like to do next?",
"faq_quote": "Get a quote for my trip",
"faq_more": "Another question",
"bk_q": "I’ll help with your booking. What do you need?",
"bk_dates": "Change dates",
"bk_add": "Add services",
"bk_conf": "Confirm itinerary",
"bk_prob": "Problem with my booking",
"bk_other": "Something else",
"bk_code_q": "Could you share your booking number or code? If you don’t have it handy, type “I don’t have it”.",
"bk_code_ph": "Booking code",
"adv_q": "Happy to connect you with an advisor. Is it about a new trip?",
"adv_yes": "Yes, a new trip",
"adv_no": "No, something else",
"adv_msg_q": "Briefly tell me what you need.",
"adv_msg_ph": "Your message",
"trip_intro": "Great! I’ll ask a few quick questions to put together a proposal tailored to you. It takes less than 2 minutes.",
"type_q": "What kind of trip are you looking for?",
"t_beach": "Beach and relaxation",
"t_city": "City and culture",
"t_adv": "Adventure and nature",
"t_cruise": "Cruise",
"t_honey": "Honeymoon or anniversary",
"t_family": "Family trip",
"t_europe": "Europe",
"t_other": "Other",
"dest_q": "Do you already have a destination in mind?",
"dest_yes": "Yes, I know where",
"dest_many": "I have a few options",
"dest_no": "No, recommend something",
"dest_where": "Where would you like to go?",
"dest_which": "Which options are you considering?",
"dest_ph": "e.g. Cancún, Madrid, Japan…",
"orig_q": "Which city would you depart from?",
"orig_ph": "Departure city",
"when_q": "When would you like to travel?",
"w1": "In less than 1 month",
"w2": "In 1 to 3 months",
"w3": "In 3 to 6 months",
"w4": "In more than 6 months",
"w5": "My dates are flexible",
"dur_q": "How many days will the trip last?",
"d1": "Weekend (2–3 days)",
"d2": "4 to 7 days",
"d3": "8 to 14 days",
"d4": "More than 2 weeks",
"who_q": "Who are you traveling with?",
"p_solo": "Solo",
"p_couple": "As a couple",
"p_kids": "Family with children",
"p_fam": "Family without children",
"p_friends": "Group of friends",
"p_work": "Business trip",
"ppl_q": "How many people in total?",
"ppl_kids": "If you can, include the children’s ages.",
"ppl_ph": "e.g. 4 (2 adults, kids aged 6 and 9)",
"bud_q": "What’s your approximate budget per person (in {m})? It helps us suggest options that fit.",
"b1": "Under 800 {m}",
"b2": "800 to 1,500 {m}",
"b3": "1,500 to 3,000 {m}",
"b4": "Over 3,000 {m}",
"b5": "Not sure yet",
"serv_q": "Which services would you like to include? You can pick several.",
"s_fly": "Flights",
"s_hotel": "Hotel",
"s_transfer": "Transfers",
"s_tours": "Tours and excursions",
"s_ins": "Travel insurance",
"s_car": "Car rental",
"s_all": "All-inclusive",
"none": "None for now",
"hotel_q": "What type of accommodation do you prefer?",
"h1": "Budget",
"h2": "3 stars",
"h3": "4 stars",
"h4": "5 stars or boutique",
"h5": "No preference",
"stage_q": "Where are you in your planning?",
"st1": "Ready to book",
"st2": "Comparing options",
"st3": "Just looking for ideas",
"notes_q": "Anything else we should know? A celebration, special needs, preferences…",
"notes_yes": "Yes, I’d like to add something",
"notes_no": "No, that’s all",
"notes_tell": "Go ahead.",
"notes_ph": "Your comments",
"src_q": "How did you hear about us?",
"src_google": "Google",
"src_ref": "A recommendation",
"src_other": "Other",
"name_q": "Thank you! So an advisor can contact you, what’s your name?",
"name_ph": "First and last name",
"name_err": "Enter your first and last name to continue.",
"phone_q": "Nice to meet you, {n}. What’s your WhatsApp or phone number? Choose your country first.",
"phone_ph": "Number without country code",
"phone_ph_other": "Full number with +code",
"phone_err": "For {c} the number must have {r} digits. You entered {d}.",
"phone_fake": "That number doesn’t look real. Please check it.",
"country": "Country",
"email_q": "And your email address?",
"email_ph": "you@example.com",
"email_err": "That email isn’t valid. Check it follows the format name@domain.com.",
"email_typo": "Did you mean {s}?",
"email_fix": "Yes, fix it",
"email_keep": "No, it’s correct",
"email_disp": "Please use a personal or work email; temporary addresses aren’t accepted.",
"pref_q": "How would you like us to contact you?",
"pr_wa": "WhatsApp",
"pr_call": "Phone call",
"pr_mail": "Email",
"news_q": "Would you like to receive our travel deals and promotions by email, once a month?",
"news_yes": "Yes, subscribe me",
"news_no": "No, thanks",
"consent_q": "Last question: do you agree to Diviaggi using your details to send your quote and follow up with you?",
"c_yes": "Yes, I agree",
"c_no": "No",
"declined": "Understood, we won’t save your details. If you change your mind, you can start over.",
"fin_hot": "All set! An advisor will contact you very soon with options for your trip.",
"fin_warm": "All set! An advisor will review your request and contact you within 24 hours.",
"fin_cold": "All set! We’ll email you ideas and options, and whenever you’re ready to move ahead, an advisor will help.",
"fin_news": "You’re subscribed to our monthly promotions.",
"wa_btn": "Message the advisor on WhatsApp"
}
};
const EXTRA={
es:{priv_link:"Leer aviso de privacidad",sending:"Enviando tu solicitud…",send_err:"No pudimos enviar tu solicitud. Revisa tu conexión e inténtalo de nuevo.",retry:"Reintentar",open_chat:"Abrir chat de Diviaggi",close:"Cerrar chat",bubble:"¿Planeas un viaje?"},
en:{priv_link:"Read privacy notice",sending:"Sending your request…",send_err:"We couldn’t send your request. Check your connection and try again.",retry:"Try again",open_chat:"Open Diviaggi chat",close:"Close chat",bubble:"Planning a trip?"}
};
for(const l in EXTRA) Object.assign(T[l],EXTRA[l]);
for(const l in T){ ["b1","b2","b3","b4"].forEach(k=>{ T[l][k]=T[l][k].replace(/\d{1,3}(?:[.,\s\u202f]\d{3})*/g, n=>({"800":"{x}","1500":"{y}","3000":"{z}"})[n.replace(/\D/g,"")]??n); }); }
/* ===== Configuración (desde el <script>) ===== */
const S = document.currentScript || document.querySelector("script[data-endpoint][src*='diviaggi-chat']");
const D = (S && S.dataset) || {};
const G = window.DIVIAGGI_CHAT || {};
const CFG = {
  endpoint: G.endpoint || D.endpoint || "",
  anonKey: G.anonKey || D.anonKey || "",
  privacyUrl: G.privacyUrl || D.privacyUrl || "",
  whatsapp: G.whatsapp || D.whatsapp || "",
  country: (G.country || D.country || "").toUpperCase(),   // el servidor de la landing puede pasar el país por IP
  test: (G.test ?? D.test) === true || (G.test ?? D.test) === "true",
  autoOpen: (G.autoOpen ?? D.autoOpen) === true || (G.autoOpen ?? D.autoOpen) === "true",
  monedas: { MXN:[15000,30000,60000], USD:[800,1500,3000] }
};
const LANGS=[["es","Español"],["en","English"]];
const LOCALES={es:"es-MX",en:"en-US"};
const COUNTRY_BY_LANG={es:"MX",en:"US"};
const COUNTRIES=[{c:"MX",f:"🇲🇽",d:"52",min:10,max:10},{c:"US",f:"🇺🇸",d:"1",min:10,max:10},{c:"CA",f:"🇨🇦",d:"1",min:10,max:10},{c:"ES",f:"🇪🇸",d:"34",min:9,max:9},{c:"AR",f:"🇦🇷",d:"54",min:10,max:11},{c:"CO",f:"🇨🇴",d:"57",min:10,max:10},{c:"CL",f:"🇨🇱",d:"56",min:9,max:9},{c:"PE",f:"🇵🇪",d:"51",min:9,max:9},{c:"BR",f:"🇧🇷",d:"55",min:10,max:11},{c:"FR",f:"🇫🇷",d:"33",min:9,max:9,strip0:true},{c:"DE",f:"🇩🇪",d:"49",min:10,max:11,strip0:true},{c:"IT",f:"🇮🇹",d:"39",min:9,max:10},{c:"GB",f:"🇬🇧",d:"44",min:10,max:10,strip0:true},{c:"JP",f:"🇯🇵",d:"81",min:10,max:10,strip0:true},{c:"CN",f:"🇨🇳",d:"86",min:11,max:11},{c:"IL",f:"🇮🇱",d:"972",min:9,max:9,strip0:true},{c:"OT",f:"🌐",d:"",min:8,max:15}];
const EMAIL_TYPOS={"gmial.com":"gmail.com","gmai.com":"gmail.com","gamil.com":"gmail.com","gmail.co":"gmail.com","gmail.con":"gmail.com","gnail.com":"gmail.com","hotmial.com":"hotmail.com","hotmal.com":"hotmail.com","hotmail.co":"hotmail.com","hotmail.con":"hotmail.com","hotmai.com":"hotmail.com","yaho.com":"yahoo.com","yahoo.co":"yahoo.com","yahooo.com":"yahoo.com","outlok.com":"outlook.com","outllok.com":"outlook.com","outlook.co":"outlook.com","iclod.com":"icloud.com","icloud.co":"icloud.com","icould.com":"icloud.com"};
const DISPOSABLE=["mailinator.com","10minutemail.com","guerrillamail.com","tempmail.com","temp-mail.org","yopmail.com","trashmail.com","sharklasers.com","getnada.com","dispostable.com"];
const MX_TZ=/^America\/(Mexico_City|Cancun|Merida|Monterrey|Matamoros|Chihuahua|Ciudad_Juarez|Ojinaga|Mazatlan|Bahia_Banderas|Hermosillo|Tijuana)$/;

/* ===== Atribución: guarda los UTM del post aunque el visitante navegue ===== */
const LOGO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAYFBMVEXS1t1jcIiepbX////r7fBRYHt5hJqwsLC8wcv///9/f38qO1w2SGd/f/+qqv+q//86SmgAAAD////9/f0rPF1HVnOyuMSMlagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfrE1AAAAGHRSTlPw/vtYo/7/A/kvAv39AgMD/gAG//3++v/R1g4iAAAE9UlEQVR42r1a7YKjKgwNiNR2du8qgr7/m97wZRUJYNcuP8aZsc0hOUkIAZjKQ6mXezw7IQAWNwCE6J7K/v+lVEUAlMU/7I9OAF8l680YhumZXDmIzkp/qE8B3ORQOufMjFqPh4F/G8a5xyipQQPYL6F0icJHYiCI9BjqMoD9Ugcro6VHDLZCCQIo21vxpiI9YBgHQXABxPRR/Ngk3quBEIQSkCVXCW6axXstuFBZsiE/fXZJvINgeSXgLB+nP340nBI1APwISP0ZgJbwPCFAKv8J/YfyEaE/I0AivxvGvxpDlyBAIn8Z/3IsCQLcLH/UCQLcLP+EAHt+h/GWMeyZhr1/jjcN2MVDBFB/FPR3AfSg/lMpwCSkvgtASzElAEgwv00+IvCNaA+gXvcREGl4qT3AJNi9ACwaCb5goIORPIACM948DKgN4DF1a04BCtTgqKuwdtPDAyh1ZFhCHCsxNxymhWerAzgGDgoYI2HG0ZPzJJDPKgSAEwO4cCAAowP1AgtwUsBKGA0CUI6leZvLeRUAmcjEgF7mmbSzf2FaYuEx2cSXWwUYqiAJBRbt7FTPjdymaLRQNsshC4SpgTkYAv+Q89BG8HsSJmtAVCFrBeZwDYm/p1lMv5HkfJllac6Fn17cfw0U3GxvIyCi2NOcdT7jmZjnRTf4EZB5lGVDYfPRgTJh4kcw0d6YnSOwwATkTZioi27KSf0yoYDlpw6KsBaauYKOnEZvQyHd+8XKGBVpoBlJgI5e6zOh4H3UKjKOa10FjAQorJXSptQsxRrwaea6CkyAKEQ8pBkv+KjPp9aRa2nPiNLSYX0djiZd9E4RVvdUuziVFEyNEHw0Phs8FaBYUCehECjeqG6geSkCaHkwgh78fOOzheYygEtpbx4jxfF5JukywEHC5qPrZjZ2cuRTKJcBjjQnFLt4QA3Hvmc48kVIRYN9KMQ0tFGttWE2p25l1JIFgEoy2WwU01BYcbThVqZdlrZ6KuumlRrt7Shx4o5izXBqa1+lGQNNmMqecZ4H/8ubYt0PwI3W5LK0TxW1jUHMB5tvAtMc+NZMguLSicmuq23NXD4wm2+ipWDfzpClhPSD6bqrZJNIc/BNDIbEL6CQU+2Co2rNIUezflOcWKRMMy6ZU7XUt1P8gaConAddX1nj+AUK6ts/u7qzMI2fTNzQRaYvW+r7PyshfKjP+CTtqXYnSJaORyuHlIYOqlsLqFg6viZRI6EPsWYpZlfqZKy7XmT5fpxi8NEV9IU6+Zcr31WDjdZIIuT5Ggia3QbEbqFqexUTg4yIWWI71LstVG4TSJvKNNeA701gcyMByST2Zc7Pzt1oeG/EW/alhu8Wl0z1kcZCaIdkWgn5OhXc7h8jLrss+ndHJ95aCWQz5Mhz7wbLGInFd8xkmyFOha+0c9Q/a0h9vaX2/abg19ua3kj3NWbZqTE7qceNnoQe9FDn5vjzNhr2By2H9v5yj/zDAUJyQHEDDeQBxU0IOwf694dEdyAsxWMuhwDm84M6A135oM5766cRhwVs9ajx+4el3z/u9eftnx1YP9SVI3d+5cidXzly3y4NyDYIjRXBxUsD72sPDQnWfHLtIdz2UO0XN9QnV09s1fFEMiSu1/rnJHxkEk3/rFxvgfrVHH95Boue9+UZw9h2eaZyQQeq13/8o7PXf4Zl4XxZBnv9p1P79/T4HxafLoJXlqDRAAAAAElFTkSuQmCC";
const ATTR_KEY="dvg_attr";
function readAttr(){ try{ return JSON.parse(localStorage.getItem(ATTR_KEY)||"null"); }catch{ return null; } }
function captureAttribution(){
  const q=new URLSearchParams(location.search); const utm={};
  ["utm_source","utm_medium","utm_campaign","utm_content"].forEach(k=>{ const v=q.get(k); if(v) utm[k]=v.slice(0,120); });
  const prev=readAttr(); const fresh=prev && (Date.now()-prev.ts) < 30*864e5;
  if(utm.utm_source){ const a={...utm, metodo:"Enlace con UTM", landing_url:location.href.slice(0,500), referrer:(document.referrer||"").slice(0,500), ts:Date.now()};
    try{ localStorage.setItem(ATTR_KEY,JSON.stringify(a)); }catch{} return a; }   // último post que trajo al cliente
  if(fresh) return prev;
  const r=(document.referrer||"").toLowerCase(); let src="";
  [["instagram","instagram"],["facebook","facebook"],["fb.","facebook"],["tiktok","tiktok"],["whatsapp","whatsapp"],["wa.me","whatsapp"],["google.","google"]].some(([s,v])=>r.includes(s)&&(src=v));
  const a={utm_source:src, metodo:src?"Página de referencia":"", landing_url:location.href.slice(0,500), referrer:r.slice(0,500), ts:Date.now()};
  if(src){ try{ localStorage.setItem(ATTR_KEY,JSON.stringify(a)); }catch{} }
  return a;
}
const ATTR=captureAttribution();

/* ===== Estado ===== */
let lang="es", currency="USD", loc, R, meta, startedAt, built=false, root, log, zone, panel, launcher;
const fmt=(s,v={})=>s.replace(/\{(\w)\}/g,(_,k)=>v[k]??curVars()[k]??"");
const t=(k,v)=>fmt(T[lang][k]??T.en[k]??T.es[k]??k,v);
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function curVars(){ let nf; try{ nf=new Intl.NumberFormat(LOCALES[lang]); }catch{ nf=new Intl.NumberFormat(); } const r=CFG.monedas[currency]; return {m:currency,x:nf.format(r[0]),y:nf.format(r[1]),z:nf.format(r[2])}; }
function detectLocation(){
  if(CFG.country) return {mx:CFG.country==="MX", metodo:"País enviado por la landing ("+CFG.country+")"};
  let tz=""; try{ tz=Intl.DateTimeFormat().resolvedOptions().timeZone||""; }catch{}
  if(MX_TZ.test(tz)) return {mx:true, metodo:"Zona horaria ("+tz+")"};
  if((navigator.languages||[navigator.language]).some(l=>/^es-MX$/i.test(l))) return {mx:true, metodo:"Idioma del navegador (es-MX)"};
  return {mx:false, metodo:tz?"Zona horaria ("+tz+")":"Sin datos"};
}

/* ===== UI ===== */
const CSS=`
:host{all:initial;--bg:#FFFFFF;--ink:#1F1C19;--muted:#8A8378;--line:#E7E1D8;--sea:#3A4968;--sea-ink:#FFFFFF;--sun:#B08D57;--bot:#F5F1EA;--err:#B4462B;color-scheme:light}
@media (prefers-color-scheme:dark){:host{--bg:#1E2433;--ink:#F2EEE7;--muted:#B5AEA3;--line:#343C50;--sea:#5B6E96;--sea-ink:#FFFFFF;--bot:#2A3245;--err:#E8876C;color-scheme:dark}}
*,*::before,*::after{box-sizing:border-box}
.w{position:fixed;inset-inline-end:max(16px,env(safe-area-inset-right,0px));bottom:max(16px,env(safe-area-inset-bottom,0px));z-index:2147483000;font:15px/1.5 "Inter",system-ui,-apple-system,"Segoe UI",Arial,sans-serif;color:var(--ink)}
.launch{display:flex;align-items:center;gap:10px;border:0;background:var(--sea);color:var(--sea-ink);border-radius:999px;padding:6px 20px 6px 6px;font:inherit;font-weight:600;cursor:pointer;box-shadow:0 6px 24px rgba(31,28,25,.22)}
.logo{width:40px;height:40px;border-radius:50%;display:block;flex:none;box-shadow:0 0 0 2px rgba(255,255,255,.85)}
.panel{position:fixed;inset-inline-end:max(16px,env(safe-area-inset-right,0px));bottom:max(16px,env(safe-area-inset-bottom,0px));width:min(400px,calc(100vw - 32px));height:min(640px,calc(100dvh - 32px));background:var(--bg);border:1px solid var(--line);border-radius:22px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 12px 40px rgba(31,28,25,.25)}
@media (max-width:480px){.panel{inset:0;width:100%;height:100%;border-radius:0;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}
.panel[hidden],.launch[hidden]{display:none}
.head{display:flex;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid var(--line)}
.av{width:38px;height:38px;border-radius:50%;display:block;flex:none}
.head strong{display:block} .head small{color:var(--muted)}
.x{margin-inline-start:auto;border:0;background:none;color:var(--ink);font-size:22px;line-height:1;width:36px;height:36px;border-radius:50%;cursor:pointer}
.log{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px}
.msg{max-width:85%;padding:9px 13px;border-radius:18px;white-space:pre-line}
.bot{background:var(--bot);border-end-start-radius:6px;align-self:flex-start}
.user{background:var(--sea);color:var(--sea-ink);border-end-end-radius:6px;align-self:flex-end}
.typing{align-self:flex-start;color:var(--muted);font-size:.9em}
.zone{border-top:1px solid var(--line);padding:12px;display:flex;flex-direction:column;gap:10px;max-height:48%;overflow-y:auto}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chip{border:1.5px solid var(--sea);background:transparent;color:var(--ink);border-radius:999px;padding:7px 13px;font:inherit;cursor:pointer;text-align:start}
.chip:hover{background:var(--bot)} .chip[aria-pressed="true"],.chip.primary{background:var(--sea);color:var(--sea-ink)}
.chip.primary{align-self:flex-start}
.row{display:flex;gap:8px}
input,select{min-width:0;border:1.5px solid var(--line);background:var(--bg);color:var(--ink);border-radius:14px;padding:10px 12px;font:inherit}
input{flex:1} input:focus,select:focus{outline:none;border-color:var(--sea)}
.send{border:0;background:var(--sea);color:var(--sea-ink);border-radius:14px;padding:0 16px;font:inherit;font-weight:600;cursor:pointer}
.hint{color:var(--err);font-size:.88em;margin:0}
a.priv{color:var(--sea);font-weight:600}
.hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}
:focus-visible{outline:3px solid var(--sun);outline-offset:2px}
`;
function mount(){
  const host=document.createElement("div"); host.id="diviaggi-chat"; document.body.appendChild(host);
  root=host.attachShadow({mode:"open"});
  root.innerHTML=`<style>${CSS}</style><div class="w"><button class="launch" type="button"><img class="logo" src="${LOGO}" alt=""><span class="lt"></span></button>
  <section class="panel" hidden role="dialog"><div class="head"><img class="av" src="${LOGO}" alt=""><div><strong>Diviaggi</strong><small class="sub"></small></div><button class="x" type="button">×</button></div>
  <div class="log" role="log" aria-live="polite"></div><div class="zone"></div><input class="hp" tabindex="-1" autocomplete="off" aria-hidden="true"></section></div>`;
  launcher=root.querySelector(".launch"); panel=root.querySelector(".panel"); log=root.querySelector(".log"); zone=root.querySelector(".zone");
  const nav=(navigator.language||"es").slice(0,2); setLang(nav==="en"?"en":"es");
  launcher.onclick=open; root.querySelector(".x").onclick=close;
  panel.addEventListener("keydown",e=>{ if(e.key==="Escape") close(); });
  if(CFG.autoOpen) open();
}
function setLang(l){ lang=l; panel.lang=l; root.querySelector(".sub").textContent=t("sub"); root.querySelector(".lt").textContent=t("bubble");
  launcher.setAttribute("aria-label",t("open_chat")); root.querySelector(".x").setAttribute("aria-label",t("close")); panel.setAttribute("aria-label","Diviaggi"); }
function open(){ launcher.hidden=true; panel.hidden=false; if(!built){ built=true; start(); } else zone.querySelector("button,input")?.focus(); }
function close(){ panel.hidden=true; launcher.hidden=false; launcher.focus(); }

function scrollDown(){ log.scrollTop=log.scrollHeight; }
function addMsg(text,who){ const d=document.createElement("div"); d.className="msg "+who; d.textContent=text; log.appendChild(d); scrollDown(); }
async function bot(...keys){ zone.innerHTML="";
  for(const k of keys){ const text=typeof k==="string"?t(k):t(k[0],k[1]); const ty=document.createElement("div"); ty.className="typing"; ty.textContent=t("typing"); log.appendChild(ty); scrollDown();
    await wait(Math.min(850,280+text.length*5)); ty.remove(); addMsg(text,"bot"); } }
function choices(opts,onPick){ zone.innerHTML=""; const c=document.createElement("div"); c.className="chips";
  opts.forEach(o=>{ const b=document.createElement("button"); b.type="button"; b.className="chip"; b.textContent=o.label??t(o.k); b.onclick=()=>{ addMsg(b.textContent,"user"); onPick(o); }; c.appendChild(b); });
  zone.appendChild(c); c.querySelector("button")?.focus({preventScroll:true}); }
function multi(keys,onDone){ zone.innerHTML=""; const c=document.createElement("div"); c.className="chips"; const sel=new Set();
  keys.forEach(k=>{ const b=document.createElement("button"); b.type="button"; b.className="chip"; b.textContent=t(k); b.setAttribute("aria-pressed","false"); b.onclick=()=>{ sel.has(k)?sel.delete(k):sel.add(k); b.setAttribute("aria-pressed",sel.has(k)); }; c.appendChild(b); });
  const ok=document.createElement("button"); ok.type="button"; ok.className="chip primary"; ok.textContent=t("done");
  ok.onclick=()=>{ const arr=keys.filter(k=>sel.has(k)); addMsg(arr.length?arr.map(k=>t(k)).join(", "):t("none"),"user"); onDone(arr); }; zone.append(c,ok); }
function hintEl(){ const h=document.createElement("p"); h.className="hint"; h.hidden=true; h.setAttribute("role","alert"); return h; }
function ask(ph,validate,onOk,type="text"){ zone.innerHTML=""; const row=document.createElement("div"); row.className="row";
  const i=document.createElement("input"); i.type=type; i.placeholder=t(ph); i.setAttribute("aria-label",t(ph)); i.maxLength=type==="email"?254:500; if(type==="email") i.autocomplete="email";
  const s=document.createElement("button"); s.type="button"; s.className="send"; s.textContent=t("send"); const h=hintEl();
  const go=()=>{ const v=i.value.trim(); const err=validate?validate(v):(!v&&t("empty")); if(err){ h.textContent=err; h.hidden=false; i.focus(); return; } addMsg(v,"user"); onOk(v); };
  s.onclick=go; i.onkeydown=e=>{ if(e.key==="Enter") go(); }; row.append(i,s); zone.append(row,h); i.focus({preventScroll:true}); }

/* ===== Validaciones (el servidor vuelve a validar) ===== */
function validatePhone(country,raw){ let digits=raw.replace(/\D/g,"");
  if(country.c==="OT"){ if(!raw.trim().startsWith("+")||digits.length<8||digits.length>15) return {err:t("phone_err",{c:"+",r:"8–15",d:digits.length})}; }
  else { if(digits.startsWith(country.d)&&digits.length>country.max) digits=digits.slice(country.d.length); if(country.strip0&&digits.startsWith("0")) digits=digits.slice(1);
    if(digits.length<country.min||digits.length>country.max){ const r=country.min===country.max?String(country.min):`${country.min}–${country.max}`; return {err:t("phone_err",{c:`${country.f} +${country.d}`,r,d:digits.length})}; } }
  const diffs=[...digits].slice(1).map((ch,i)=>ch-digits[i]);
  if(/^(\d)\1+$/.test(digits)||diffs.every(x=>x===1)||diffs.every(x=>x===-1)) return {err:t("phone_fake")};
  return {e164:"+"+(country.c==="OT"?"":country.d)+digits}; }
function checkEmail(v){ const e=v.trim().toLowerCase();
  const re=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/;
  if(e.length>254||!re.test(e)) return {err:t("email_err")}; const dom=e.split("@")[1];
  if(DISPOSABLE.includes(dom)) return {err:t("email_disp")}; if(EMAIL_TYPOS[dom]) return {email:e,suggestion:e.split("@")[0]+"@"+EMAIL_TYPOS[dom]}; return {email:e}; }

/* ===== Flujo de conversación ===== */
async function start(){
  log.innerHTML=""; R={dudas:[]}; meta={tipo:"cotizacion"}; startedAt=Date.now();
  loc=detectLocation(); currency=loc.mx?"MXN":"USD";
  await bot("hello","lang_q");
  choices(LANGS.map(([k,label])=>({k,label})), async o=>{ setLang(o.k); await bot("help"); menu(); });
}
function menu(){ choices([{k:"m_quote",go:tripStart},{k:"m_faq",go:faqMenu},{k:"m_booking",go:bookingFlow},{k:"m_advisor",go:directAdvisor}],o=>o.go()); }
async function faqMenu(){ await bot("faq_q");
  choices([["f_pay","a_pay"],["f_docs","a_docs"],["f_cancel","a_cancel"],["f_ins","a_ins"],["f_groups","a_groups"],["f_hours","a_hours"]].map(([k,a])=>({k,a})), async o=>{
    R.dudas.push(o.k); await bot(o.a,"faq_next"); choices([{k:"faq_quote",go:tripStart},{k:"faq_more",go:faqMenu},{k:"m_advisor",go:directAdvisor}],x=>x.go()); }); }
async function bookingFlow(){ meta.tipo="soporte_reserva"; await bot("bk_q");
  choices(["bk_dates","bk_add","bk_conf","bk_prob","bk_other"].map(k=>({k})), async o=>{ R.motivo=o.k; await bot("bk_code_q"); ask("bk_code_ph",null,v=>{ R.codigoReserva=v; contactFlow(); }); }); }
async function directAdvisor(){ meta.tipo="asesor_directo"; await bot("adv_q");
  choices([{k:"adv_yes",go:tripStart},{k:"adv_no",go:async()=>{ await bot("adv_msg_q"); ask("adv_msg_ph",null,v=>{ R.mensaje=v; contactFlow(); }); }}],o=>o.go()); }
async function tripStart(){ if(meta.tipo!=="asesor_directo") meta.tipo="cotizacion"; await bot("trip_intro","type_q");
  choices(["t_beach","t_city","t_adv","t_cruise","t_honey","t_family","t_europe","t_other"].map(k=>({k})), o=>{ R.tipoViaje=o.k; askDestino(); }); }
async function askDestino(){ await bot("dest_q");
  choices([{k:"dest_yes"},{k:"dest_many"},{k:"dest_no"}], async o=>{ R.destinoModo=o.k; if(o.k==="dest_no") return askOrigen();
    await bot(o.k==="dest_yes"?"dest_where":"dest_which"); ask("dest_ph",null,v=>{ R.destino=v; askOrigen(); }); }); }
async function askOrigen(){ await bot("orig_q"); ask("orig_ph",null,v=>{ R.ciudadSalida=v; askFechas(); }); }
async function askFechas(){ await bot("when_q"); choices(["w1","w2","w3","w4","w5"].map(k=>({k})), o=>{ R.cuando=o.k; askDuracion(); }); }
async function askDuracion(){ await bot("dur_q"); choices(["d1","d2","d3","d4"].map(k=>({k})), o=>{ R.duracion=o.k; askViajeros(); }); }
async function askViajeros(){ await bot("who_q");
  choices(["p_solo","p_couple","p_kids","p_fam","p_friends","p_work"].map(k=>({k})), async o=>{ R.conQuien=o.k;
    if(o.k==="p_solo"||o.k==="p_couple") return askPresupuesto();
    await bot("ppl_q"); if(o.k==="p_kids") await bot("ppl_kids"); ask("ppl_ph",null,v=>{ R.personas=v; askPresupuesto(); }); }); }
async function askPresupuesto(){ await bot("bud_q"); choices(["b1","b2","b3","b4","b5"].map(k=>({k})), o=>{ R.presupuesto=o.k; askServicios(); }); }
async function askServicios(){ await bot("serv_q"); multi(["s_fly","s_hotel","s_transfer","s_tours","s_ins","s_car","s_all"], arr=>{ R.servicios=arr; askHotel(); }); }
async function askHotel(){ if(!R.servicios.some(s=>s==="s_hotel"||s==="s_all")) return askDecision();
  await bot("hotel_q"); choices(["h1","h2","h3","h4","h5"].map(k=>({k})), o=>{ R.hospedaje=o.k; askDecision(); }); }
async function askDecision(){ await bot("stage_q"); choices(["st1","st2","st3"].map(k=>({k})), o=>{ R.etapa=o.k; askNotas(); }); }
async function askNotas(){ await bot("notes_q"); choices([{k:"notes_yes"},{k:"notes_no"}], async o=>{ if(o.k==="notes_no") return contactFlow();
  await bot("notes_tell"); ask("notes_ph",null,v=>{ R.notas=v; contactFlow(); }); }); }

async function contactFlow(){
  if(!ATTR.utm_source){ await bot("src_q");
    return choices([["ig","Instagram"],["fb","Facebook"],["tt","TikTok"],["wa","WhatsApp"],["google"],["ref"],["other"]].map(([k,l])=>({k:"src_"+k,label:l,id:k})), o=>{ R.origenRespuesta=o.id; askName(); }); }
  askName(); }
async function askName(){ await bot("name_q");
  ask("name_ph", v=>(v.length<2||v.split(/\s+/).length<2)?t("name_err"):null, v=>{ meta.nombre=v; askPhone(); }); }
async function askPhone(){
  await bot(["phone_q",{n:meta.nombre.split(/\s+/)[0]}]);
  zone.innerHTML=""; const row=document.createElement("div"); row.className="row";
  const sel=document.createElement("select"); sel.setAttribute("aria-label",t("country"));
  COUNTRIES.forEach(c=>{ const o=document.createElement("option"); o.value=c.c; o.textContent=c.c==="OT"?`${c.f} +…`:`${c.f} +${c.d}`; sel.appendChild(o); });
  sel.value=loc.mx?"MX":(CFG.country&&COUNTRIES.some(c=>c.c===CFG.country)?CFG.country:(COUNTRY_BY_LANG[lang]||"US"));
  const i=document.createElement("input"); i.type="tel"; i.inputMode="tel"; i.autocomplete="tel-national";
  const setPh=()=>{ i.placeholder=t(sel.value==="OT"?"phone_ph_other":"phone_ph"); i.setAttribute("aria-label",i.placeholder); }; setPh(); sel.onchange=setPh;
  const s=document.createElement("button"); s.type="button"; s.className="send"; s.textContent=t("send"); const h=hintEl();
  const go=()=>{ const country=COUNTRIES.find(c=>c.c===sel.value); const r=validatePhone(country,i.value);
    if(r.err){ h.textContent=r.err; h.hidden=false; i.focus(); return; } addMsg(r.e164,"user"); meta.telefono=r.e164; meta.pais=country.c; askEmail(); };
  s.onclick=go; i.onkeydown=e=>{ if(e.key==="Enter") go(); }; row.append(sel,i,s); zone.append(row,h); i.focus({preventScroll:true});
}
async function askEmail(){ await bot("email_q");
  ask("email_ph", v=>checkEmail(v).err||null, async v=>{ const r=checkEmail(v);
    if(r.suggestion){ await bot(["email_typo",{s:r.suggestion}]); return choices([{k:"email_fix",e:r.suggestion},{k:"email_keep",e:r.email}], o=>{ meta.email=o.e; askPref(); }); }
    meta.email=r.email; askPref(); }, "email"); }
async function askPref(){ await bot("pref_q");
  choices([{k:"pr_wa"},{k:"pr_call"},{k:"pr_mail"}], async o=>{ meta.preferido=o.k; await bot("news_q");
    choices([{k:"news_yes",v:true},{k:"news_no",v:false}], async n=>{ meta.newsletter=n.v; await bot("consent_q");
      if(CFG.privacyUrl){ const a=document.createElement("a"); a.className="priv"; a.href=CFG.privacyUrl; a.target="_blank"; a.rel="noopener"; a.textContent=t("priv_link"); log.appendChild(a); scrollDown(); }
      choices([{k:"c_yes",v:true},{k:"c_no",v:false}], c=>{ if(!c.v) return declined(); submit(); }); }); }); }
async function declined(){ await bot("declined"); choices([{k:"restart"}], start); }

/* ===== Envío a Supabase ===== */
async function submit(){
  zone.innerHTML=""; const s=document.createElement("div"); s.className="typing"; s.textContent=t("sending"); log.appendChild(s); scrollDown();
  const payload={ v:1, idioma:lang, moneda:currency, tipo:meta.tipo, ubicacion:{mx:loc.mx, metodo:loc.metodo},
    respuestas:R, contacto:{ nombre:meta.nombre, pais:meta.pais, telefono:meta.telefono, email:meta.email, preferido:meta.preferido, newsletter:!!meta.newsletter, consentimiento:true },
    atribucion:{ utm_source:ATTR.utm_source||"", utm_medium:ATTR.utm_medium||"", utm_campaign:ATTR.utm_campaign||"", utm_content:ATTR.utm_content||"", metodo:ATTR.metodo||"", landing_url:ATTR.landing_url||location.href, referrer:ATTR.referrer||"" },
    meta:{ tiempo_ms:Date.now()-startedAt, hp:root.querySelector(".hp").value, es_prueba:CFG.test } };
  let res;
  try{
    const headers={"content-type":"application/json"}; if(CFG.anonKey){ headers.apikey=CFG.anonKey; headers.authorization="Bearer "+CFG.anonKey; }
    const r=await fetch(CFG.endpoint,{method:"POST",headers,body:JSON.stringify(payload)}); res=await r.json().catch(()=>({})); if(!r.ok||!res.ok) throw new Error(res.message||res.error||r.status);
  }catch(e){ s.remove(); console.warn("[Diviaggi chat]",e); await bot("send_err"); return choices([{k:"retry"}], submit); }
  s.remove();
  const k=res.calificacion==="hot"?"fin_hot":res.calificacion==="warm"?"fin_warm":"fin_cold";
  await bot(k); if(meta.newsletter) await bot("fin_news");
  try{ window.dispatchEvent(new CustomEvent("diviaggi:lead",{detail:{id:res.id,calificacion:res.calificacion,origen:ATTR.utm_source||R.origenRespuesta||""}})); }catch{}
  const box=document.createElement("div"); box.className="chips";
  if(CFG.whatsapp){ const b=document.createElement("button"); b.type="button"; b.className="chip"; b.textContent=t("wa_btn"); b.onclick=()=>window.open(`https://wa.me/${CFG.whatsapp}`,"_blank","noopener"); box.appendChild(b); }
  const b2=document.createElement("button"); b2.type="button"; b2.className="chip"; b2.textContent=t("restart"); b2.onclick=start; box.appendChild(b2);
  zone.innerHTML=""; zone.appendChild(box);
}

window.DiviaggiChat={ open:()=>{ if(!root) return; open(); }, close:()=>root&&close() };
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",mount); else mount();
})();
