import google.generativeai as genai

class Gemini:
    def __init__(self, API_KEY, context = []):
        genai.configure(api_key=API_KEY)
        self.model1 = genai.GenerativeModel("gemini-2.0-flash", system_instruction="Think your self as a careeer counselor. so you give the user informations about career paths and skills required to join that career work force. also you provide optimum time required. Be interactive in conversations do notjump in to the point but wait until the user asks about it")
        self.model2 = genai.GenerativeModel("gemini-2.0-flash", 
                                            system_instruction="You are to generate json format data about multiple dominat careers matching user preferences. the json data you respond with is JSON object of arrays of careers as follows [{\"careerName\":name_of_career, \"description\":career_description,\"marketDemand\":demand_in_market_in_percentage, salary:{min:minimum salary, max: maximum_salary}, skillsRequired:[{skill:skill, time:optimum time required}]}] ")
        self.context = context

    def ask_gemini_text(self, message):
        self.context.append({'role':'user', 'parts':message})
        response = self.model1.generate_content(self.context)
        self.context.append(response.candidates[0].content)
        return {'role':'model', 'parts':response.text}

    def ask_gemini_recommendation(self,message):
        recommendation = self.model2.generate_content(message)
        return {"role":"model", "parts":recommendation.text}