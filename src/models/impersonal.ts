// import React, { ChangeEvent, SetStateAction } from 'react';
// import { useHistory } from 'react-router-dom';

// import { FormField } from '../components/formfield';
// import { Input, StringInputProperties } from '../components/input';
// import { Select, SelectValues } from '../components/select';
// import { useAuthState } from '../services/auth';
// import { addEmptyString } from '../services/utils';

// export interface ParameterTypes {
//   id: string;
// }

// export type EmailValues = {
//   emails: string[];
//   setter: (value: SetStateAction<string[]>) => void;
// };

// export type PhoneValues = {
//   phones: string[];
//   setter: (value: SetStateAction<string[]>) => void;
// };

// export const EmailInputs = (properties: EmailValues): JSX.Element => (
//   <div class="field">
//     <label class="label" htmlFor="email-1-input">
//       Электронный адрес
//     </label>
//     {properties.emails.map((email, index) => (
//       <Input
//         name={`email-${index}-input`}
//         type="email"
//         icon="envelope"
//         key={`email-${index}`}
//         value={email}
//         placeholder="Электронный адрес"
//         onBlur={(event): void => {
//           let values = properties.emails;
//           values[index] = event.target.value;
//           values = addEmptyString(values);
//           properties.setter(values);
//         }}
//         classDiv="pb-1"
//       />
//     ))}
//   </div>
// );

// export const PhoneInputs = (properties: PhoneValues): JSX.Element => (
//   <div class="field">
//     <label class="label" htmlFor="phone-1-input">
//       Телефон
//     </label>
//     {properties.phones.map((phone, index) => (
//       <Input
//         name={`phone-${index}-input`}
//         type="tel"
//         icon="phone"
//         key={`phone-${index}`}
//         value={phone.toString()}
//         placeholder="Телефон"
//         onBlur={(event): void => {
//           let values = properties.phones;
//           values[index] = event.target.value;
//           values = addEmptyString(values);
//           properties.setter(values);
//         }}
//         classDiv="pb-1"
//       />
//     ))}
//   </div>
// );

// export const FaxInputs = (properties: PhoneValues): JSX.Element => (
//   <div class="field">
//     <label class="label" htmlFor="fax-1-input">
//       Факс
//     </label>
//     {properties.phones.map((fax, index) => (
//       <Input
//         name={`fax-${index}-input`}
//         type="tel"
//         icon="fax"
//         key={`fax-${index}`}
//         value={fax.toString()}
//         placeholder="Факс"
//         onBlur={(event): void => {
//           let values = properties.phones;
//           values[index] = event.target.value;
//           values = addEmptyString(values);
//           properties.setter(values);
//         }}
//         classDiv="pb-1"
//       />
//     ))}
//   </div>
// );

// export const NoteInput = (properties: StringInputProperties): JSX.Element => (
//   <FormField
//     name="note"
//     value={properties.value}
//     onChange={(event: ChangeEvent<HTMLInputElement>): void => {
//       properties.setter(event.target.value === '' ? undefined : event.target.value);
//     }}
//     label="Заметки"
//     icon="comment"
//   />
// );

// export const AddressInput = (properties: StringInputProperties): JSX.Element => (
//   <FormField
//     name="address"
//     value={properties.value}
//     onChange={(event: ChangeEvent<HTMLInputElement>): void =>
//       properties.setter(event.target.value === '' ? undefined : event.target.value)
//     }
//     label="Адрес"
//     icon="address-card"
//   />
// );

// export const ContactIDSelect = (properties: SelectValues): JSX.Element => (
//   <Select
//     name="contact"
//     label="Контактное лицо"
//     listName="ContactSelect"
//     id={properties.id}
//     icon="user"
//     setter={properties.setter}
//   />
// );

// interface FormButtonsValues {
//   del: () => void;
//   send: () => void;
// }

// export const ItemFormButtons = (properties: FormButtonsValues): JSX.Element => {
//   const history = useHistory();
//   const { auth } = useAuthState();
//   const { send, del } = properties;

//   const SaveButton = () =>
//     auth.user.role > 4 ? (
//       <div class="control">
//         <button type="button" class="button is-info" onClick={() => send()}>
//           Сохранить
//         </button>
//       </div>
//     ) : (
//       <></>
//     );

//   const BackButton = () => (
//     <div class="control">
//       <button type="button" class="button" onClick={() => history.go(-1)}>
//         Закрыть
//       </button>
//     </div>
//   );

//   const DeleteButton = () =>
//     auth.user.role > 8 ? (
//       <div class="control mla">
//         <button
//           type="button"
//           class="button is-danger"
//           onClick={() => {
//             if (window.confirm('Вы действительно хотите удалить запись?')) {
//               del();
//             }
//           }}
//         >
//           Удалить
//         </button>
//       </div>
//     ) : (
//       <></>
//     );

//   return (
//     <div class="field is-grouped">
//       <SaveButton />
//       <BackButton />
//       <DeleteButton />
//     </div>
//   );
// };
