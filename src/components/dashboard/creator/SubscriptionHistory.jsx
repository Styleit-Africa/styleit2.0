import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CreditCard, FileText } from 'lucide-react';
import PostListLoader from '@/components/global/loaders/PostListLoader';
import { useQuery } from '@tanstack/react-query';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useClientStore } from '@/store/useClient';

const SubscriptionHistory = () => {
    const [page, setPage] = useState(1)
    const PAGES_TO_SHOW = 3

    const {getSubscriptionHistories} = useClientStore()

    const { data, isLoading } = useQuery({
        queryKey: ['subscription-histories', page],
        queryFn: async() =>await getSubscriptionHistories(page)
    })

    // Calculate which pages to display
    const getVisiblePages = () => {
        const totalPages = data?.pagination?.total_pages || 0
        if (totalPages <= PAGES_TO_SHOW) {
            // If total pages is less than or equal to 10, show all
            return Array.from({ length: totalPages }, (_, i) => i + 1)
        }

        // Calculate the start of the current page group
        const currentGroup = Math.floor((page - 1) / PAGES_TO_SHOW)
        const startPage = currentGroup * PAGES_TO_SHOW + 1
        const endPage = Math.min(startPage + PAGES_TO_SHOW - 1, totalPages)

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
    }

    const visiblePages = getVisiblePages()
    const totalPages = data?.pagination?.total_pages || 0
    const hasNextGroup = page + PAGES_TO_SHOW <= totalPages
    const hasPrevGroup = page > PAGES_TO_SHOW

    const formatDate = (dateString) => {
        return new Date('2024-11-15').toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status) => {
        return status === 'active' 
            ? 'bg-green-500 text-white hover:bg-green-600' 
            : 'bg-red-400 text-white hover:bg-red-500';
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage)
        }
    }

    return (
        <div className="">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Subscription History</h1>
            </div>
            
            {isLoading ? <PostListLoader /> : 
                <div>
                    {data?.subscriptions.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <CreditCard className="w-12 h-12 text-slate-300 mb-4" />
                                <p className="text-slate-500">No subscriptions found</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="flex flex-col md:flex-row flex-wrap gap-4">
                            {data?.subscriptions.map((sub) => (
                                <Card key={sub.id} className="md:basis-[40%] lg:basis-[30%] hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle className="flex items-center gap-2">
                                                    <CreditCard className="w-5 h-5 text-slate-600" />
                                                    Plan ₦{sub.plan}
                                                </CardTitle>
                                            </div>
                                            <Badge className={getStatusColor(sub.status)}>
                                                {sub.status}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex items-start gap-3">
                                                <Calendar className="w-4 h-4 text-slate-500 mt-1" />
                                                <div>
                                                    <p className="text-sm font-medium text-slate-700">Start Date</p>
                                                    <p className="text-sm text-slate-600">{formatDate(sub.startDate)}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-start gap-3">
                                                <Calendar className="w-4 h-4 text-slate-500 mt-1" />
                                                <div>
                                                    <p className="text-sm font-medium text-slate-700">End Date</p>
                                                    <p className="text-sm text-slate-600">{formatDate(sub.endDate)}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-start gap-3">
                                                <FileText className="w-4 h-4 text-slate-500 mt-1" />
                                                <div>
                                                    <p className="text-sm font-medium text-slate-700">Reference</p>
                                                    <p className="text-sm text-slate-600 font-mono">{sub.refrence}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            }

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-8">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem className='hidden md:block'>
                                <PaginationPrevious 
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handlePageChange(page - 1)
                                    }}
                                    className={`bg-primary text-white ${page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                />
                            </PaginationItem>

                            {/* Show ellipsis if there are previous groups */}
                            {hasPrevGroup && (
                                <>
                                    <PaginationItem>
                                        <PaginationLink 
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handlePageChange(1)
                                            }}
                                        >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                </>
                            )}

                            {/* Visible page numbers */}
                            {visiblePages.map(_page => (
                                <PaginationItem key={_page}>
                                    <PaginationLink 
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handlePageChange(_page)
                                        }}
                                        isActive={page === _page}
                                        className="cursor-pointer text-primary"
                                    >
                                        {_page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            {/* Show ellipsis if there are next groups */}
                            {hasNextGroup && (
                                <>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink 
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handlePageChange(totalPages)
                                            }}
                                        >
                                            {totalPages}
                                        </PaginationLink>
                                    </PaginationItem>
                                </>
                            )}

                            <PaginationItem className='hidden md:block'>
                                <PaginationNext 
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handlePageChange(page + 1)
                                    }}
                                    className={`bg-primary text-white ${page === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                    <Pagination className='mt-4'>
                        <PaginationContent>
                            
                                <PaginationItem className='md:hidden'>
                                <PaginationPrevious 
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handlePageChange(page - 1)
                                    }}
                                    className={`bg-primary text-white ${page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                />
                            </PaginationItem>
                             <PaginationItem className=' md:hidden'>
                                <PaginationNext 
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handlePageChange(page + 1)
                                    }}
                                    className={`bg-primary text-white ${page === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                <p className="text-slate-600 text-center md:text-left mt-4">Page {page} of {totalPages}</p>

                </div>
            )}
        </div>
    );
};

export default SubscriptionHistory;
