export let assistantId = "asst_2EUBp8ldxcyqroJW4o2jlvxP"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
