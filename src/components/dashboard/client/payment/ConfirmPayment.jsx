import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

 const ConfirmPayment = ()=> {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { name, bookingId, designerId } = useParams();
  const paymentDetails = JSON.parse(localStorage.getItem('userDetails'))
  

  const handleConfirm = async() => {
       try {
            const response =  await axios.post(`https://styleitafrica.pythonanywhere.com/api/confirm_payment/${Number(bookingId)}/`,
            {refno:"9426570"},
            {
              headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
                Accept: 'application/json'
              },
              withCredentials: true  
            }
      );
      
      console.log(response)
      if(response.status === 201){
        setIsSubmitting(true)
        navigate(response.data.authorization_url)
      }
          // navigate(`/client/payment/${name}/${bookingId}/${designerId}/confirm_payment`)
    
      setSubmitStatus({
        type: 'success',
        message: 'Payment initialized successfully!'
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to submit payment'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const handleBack = () => {
   navigate(`/client/payment/${name}/${bookingId}/${designerId}`)
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader className="space-y-1">
          <div className="w-16 h-16 bg-pink-100 green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            {/* <CheckCircle2 className="w-10 h-10 text-green-600" /> */}
            <CheckCircle2 className="w-10 h-10 text-primary green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Confirm Payment</CardTitle>
          <CardDescription className="text-center">
            Please review your payment details before proceeding
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="space-y-2">
              <Label htmlFor="desiid" className="text-gray-700 font-semibold">Destination</Label>
              <Input
                id="desiid"
                type="text"
                value={name}
                disabled
                className="py-6 bg-gray-50 text-gray-700 font-medium border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount" className="text-gray-700 font-semibold">Amount</Label>
              <Input
                id="amount"
                type="text"
                value={`₦${parseFloat(paymentDetails.amount).toLocaleString()}`}
                disabled
                className="py-6 bg-gray-50 text-gray-700 font-medium border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="charges" className="text-gray-700 font-semibold">Charges (12% VAT)</Label>
              <Input
                id="charges"
                type="text"
                value={`₦${parseFloat(paymentDetails.charges).toLocaleString()}`}
                disabled
                className="py-6 bg-gray-50 text-gray-700 font-medium border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="total" className="text-gray-700 font-semibold">Total Amount</Label>
              <Input
                id="total"
                type="text"
                value={`₦${parseFloat(paymentDetails.total).toLocaleString()}`}
                disabled
                className="py-6 bg-pink-50 text-pink-700 green-700 font-bold text-lg border-pink-200"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Note:</span> By confirming this payment, you agree to pay the total amount of{' '}
                <span className="font-bold">₦{parseFloat(paymentDetails.total).toLocaleString()}</span> to{' '}
                <span className="font-semibold">{paymentDetails.name}</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button 
                type="button"
                variant="outline"
                className="w-full sm:w-1/2 py-6 border-gray-300"
                onClick={handleBack}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Edit
              </Button>
              
              <Button 
                type="button"
                className="w-full sm:w-1/2 bg-primary hover:bg-green-700 text-white py-6"
                onClick={handleConfirm}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Confirm Payment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ConfirmPayment